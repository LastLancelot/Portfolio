import numpy as np
from math import cos, sin
from sympy import *
from tabulate import tabulate
import matplotlib.pyplot as plt





x = symbols('x')
fx = 3*x + cos(x) + 1
f1x = diff(fx,x)
f2x = diff(f1x,x)
fxGraf = fx.subs(x,1)

eq1 = Eq(fx)
sol = nsolve(eq1,x, 1)
a1 = sol - 10
b1 = sol + 10
a = float(a1)
b = float(b1)

epsilon = 0.0001



func = np.array(np.arange(a, b+0.1, 0.1))
num = 0
for i in np.arange(a, b+0.1, 0.1) :
  func[num] = fx.subs(x, i)
  num += 1


xh0 = a
xn0 = b
xn = [xn0]
xh = [xh0]
num = 1
if(fx.subs(x, a) * f2x.subs(x, a) > 0) :
  xn0 = a
  xh0 = b
  while(abs(xh0 - xn0) > 2*epsilon) :
    xnn = xn0 - (fx.subs(x, xn0)/f1x.subs(x, xn0))
    xhn = xh0 - ((fx.subs(x, xh0) * (xh0 - a)) / (fx.subs(x, xh0) - fx.subs(x, a)))
    xn0 = xnn
    xh0 = xhn
    num += 1
    xn.append(xnn)
    xh.append(xhn)
else:
  xn0 = b
  xh0 = a
  while(abs(xh0 - xn0) > 2*epsilon) :
    xnn = xn0 - (fx.subs(x, xn0)/f1x.subs(x, xn0))
    xhn = xh0 - ((fx.subs(x, xh0) * (b - xh0))/(fx.subs(x, b) - fx.subs(x, xh0)))
    xn0 = xnn
    xh0 = xhn
    xn.append(xnn)
    xh.append(xhn)
    num += 1
fxn = []
fxh = []
for elem in xn :
  fxn.append(fx.subs(x, elem))
for elem in xh :
  fxh.append(fx.subs(x, elem))

table = {'n': range(num),
'xn ньютона': xn,
'f(xn) ньютона': fxn,
'xn хорди': xh,
'f(xn) хорди': fxh,
}


print(sol)
print (tabulate(table, headers='keys', tablefmt='fancy_grid'))
plt.plot(np.arange(a, b+0.1, 0.1), func)
plt.grid()
plt.ylabel('y')
plt.xlabel('x')
plt.show()

#3x+cos(x)+1 E = 0.01