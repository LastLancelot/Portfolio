# y`= y + 2 * t - 3
# y = 2 * exp(t) - 2 * t + 1
# [1; 3]
# t(1) = 1
# u(j+1) = uj + h f(xj; uj)
# u(j+1) = uj + h/6 * (k1+2 * k2 + 2 * k3 + k4)
# k1 = f(xj; uj)
# k2 = f(xj + h/2; uj + h/2*k1)
# k3 = f(xj + h/2; uj + h/2*k2)
# k4 = f(xj + h; uj + h*k3)


def func_u(u, t):
  val = (u + 2 * t - 3)
  return val


def func_r(t):
  val = 2 * exp(t) - 2 * t + 1
  return val

import numpy as np
from math import cos, sin, exp
from tabulate import tabulate
import matplotlib.pyplot as plt

a = 1
b = 100
u0 = 1
h = 0.02
#h = (b-a)/200
t = (np.arange(a, b+h, h))

u_real = [u0]

for i in np.arange(a,b+h,h):
  u_temp = func_r(t[i])
  u_real.append(u_temp)

u_euler = [u0]

iteration = 0
for i in np.arange(a,b+h,h):
  u_temp = u_euler[iteration] + h * func_u(u_euler[iteration], t[iteration])
  u_euler.append(u_temp)
  iteration += 1

u_runge = [u0]

iteration = 0
for i in np.arange(a,b+h,h):
  k1 = h*(u_runge[iteration] * ((1/i) - 1))
  k2 = h*((u_runge[iteration] + h/2 * k1) * ((1/(i + h/2)) - 1))
  k3 = h*((u_runge[iteration] + h/2 * k2) * ((1/(i + h/2)) - 1))
  k4 = h*((u_runge[iteration] + h * k3) * ((1/(i + h)) - 1))
  u_temp = u_runge[iteration] + h/6 * (k1 + 2 * k2 + 2 * k3 + k4)
  u_runge.append(u_temp)
  iteration += 1

u_adams_pre = [u_real[0], u_real[1], u_real[2], u_real[3]]

i = 3
while i < len(t):
  u_temp = u_adams_pre[i] + h/24 * ((55 * ((u_adams_pre[i] * ((1/t[i]) - 1))) - (59 * (u_adams_pre[i-1] * ((1/t[i-2]) - 1))) + (37 * (u_adams_pre[i-3] * ((1/t[i-2]) - 1)))) - (9 * (u_adams_pre[i-4] * ((1/t[i-3]) - 1))))
  u_adams_pre.append(u_temp)
  i+=1


u_adams_eul = [u_euler[0], u_euler[1], u_euler[2], u_euler[3]]

i = 3
while i < len(t):
  u_temp = u_adams_eul[i] + h/24 * ((55 * ((u_adams_eul[i] * ((1/t[i]) - 1))) - (59 * (u_adams_eul[i-2] * ((1/t[i-2]) - 1))) + (37 * (u_adams_eul[i-3] * ((1/t[i-2]) - 1)))) - (9 * (u_adams_eul[i-4] * ((1/t[i-4]) - 1))))
  u_adams_eul.append(u_temp)
  i+=1

u_adams_run = [u_runge[0], u_runge[1], u_runge[2], u_runge[3]]

i = 3
while i < len(t):
  u_temp = u_adams_run[i] + h/24 * ((55 * ((u_adams_run[i] * ((1/t[i]) - 1))) - (59 * (u_adams_run[i-2] * ((1/t[i-2]) - 1))) + (37 * (u_adams_run[i-3] * ((1/t[i-3]) - 1)))) - (9 * (u_adams_run[i-4] * ((1/t[i-4]) - 1))))
  u_adams_run.append(u_temp)
  i+=1


t = np.append(t, b+h)

i = 0

pohibka_runge = []
pohibka_euler = []
pohibka_adams_pre = []
pohibka_adams_eul = []
pohibka_adams_run = []



while i < len(t):
  pohibka_runge.append(u_real[i] - u_runge[i])
  pohibka_adams_pre.append(u_real[i] - u_adams_pre[i])
  pohibka_adams_eul.append(u_real[i] - u_adams_eul[i])
  pohibka_adams_run.append(u_real[i] - u_adams_run[i])
  pohibka_euler.append(u_real[i] - u_euler[i])
  i += 1


table = {'n': range(i),
't': t,
'u adamsa with precise': u_adams_pre,
'u adamsa with euler': u_adams_eul,
'u adamsa with runge': u_adams_run,
'u ': u_real,
'pohibka with precise': pohibka_adams_pre,
'pohibka with euler': pohibka_adams_eul,
'pohibka with runge': pohibka_adams_run,
}

print (tabulate(table, headers='keys', tablefmt='fancy_grid'))


plt.plot(t, u_real, t, u_euler, t, u_adams_pre, t, u_adams_eul, t, u_adams_run)
plt.grid()
plt.ylabel('y')
plt.xlabel('x')
plt.show()
