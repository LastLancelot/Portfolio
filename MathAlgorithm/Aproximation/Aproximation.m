a = 0
b = 2*pi
num = 50

x = linspace(a,b* ((num-1)/num), num)
func = cos(15*x)

xp = linspace(a, (b*(num-1)/num),100)
funcp = cos(15*xp)

y = func
modValue = mod(num,2)
ak = zeros(1, (num - modValue)/2)
bk = zeros(1, (num - modValue)/2)
qn = zeros(1, num)
qnp = zeros(1, 100)
pohibka = zeros(1, 100)
if (modValue == 1)
  k = 0
  while(k <= (num - modValue)/2 )
    j = 0
    sum = 0
    while(j <=  num - 1)
      sum = sum + y(j+1) * cos((2*pi*(j)*(k))/(num))
      j = j + 1
  endwhile
    ak(k+1) = sum/(num) * 2
    k = k + 1
  endwhile


  k = 1
  while(k <= (num - modValue)/2 -1)
    j = 0
    sum = 0
    while( j <=  num - 1 )
      sum = sum + y(j+1) * sin((2*pi*k*j)/(num))
      j = j+1
    endwhile
    bk(k + 1) = 2/num * sum
    k = k+1
  endwhile
  sum = 0
  j = 0
  while (j < num)
    k = 1
    while(k <= (num - modValue)/2)
      sum = sum + ak(k + 1) * cos (x(j + 1) * k)
      k = k + 1
    endwhile
    qn(j+1) = ak(1)/2 + sum
    sum = 0
    k = 1
    while(k <= (num - modValue)/2 - 1)
      sum = sum + bk(k+1) *sin (x(j + 1) * k)
      k = k + 1
    endwhile
    qn = qn + sum
    j = j + 1
  endwhile
endif

if (modValue == 0)
  k = 0
  while(k <= (num - modValue)/2 )
    j = 0
    sum = 0
    while(j <=  num - 1)
      sum = sum + y(j+1) * cos((2*pi*(j)*(k))/(num))
      j = j + 1
  endwhile
    ak(k+1) = sum/(num) * 2
    k = k + 1
  endwhile


  k = 1
  while(k <= (num - modValue)/2 -1)
    j = 0
    sum = 0
    while( j <=  num - 1 )
      sum = sum + y(j+1) * sin((2*pi*k*j)/(num))
      j = j+1
    endwhile
    bk(k + 1) = 2/num * sum
    k = k+1
  endwhile

    sum = 0
  j = 0
  while (j < num)
    k = 1
    while(k <= (num - modValue)/2)
      sum = sum + ak(k + 1) * cos (x(j + 1) * k)
      k = k + 1
    endwhile
    qn(j+1) = ak(1)/2 + sum
    sum = 0
    k = 1
    while(k <= (num - modValue)/2 - 1)
      sum = sum + bk(k+1) *sin (x(j + 1) * k)
      k = k + 1
    endwhile
    qn = qn + sum
    j = j + 1
  endwhile
endif
display (ak)
display (bk)



i = 1


if (modValue == 1)
  sum = 0
  j = 0
  while (j < 100)
    k = 1
    while(k <= (num - modValue)/2)
      sum = sum + ak(k + 1) * cos (xp(j + 1) * k)
      k = k + 1
    endwhile
    qnp(j+1) = ak(1)/2 + sum
    sum = 0
    k = 1
    while(k <= (num - modValue)/2 - 1)
      sum = sum + bk(k+1) *sin (xp(j + 1) * k)
      k = k + 1
    endwhile
    qnp(j+1) = qnp(j+1) + sum
    j = j + 1
  endwhile
endif

if (modValue == 0)
  sum = 0
  j = 0
  while (j < 100)
    k = 1
    while(k <= (num - modValue)/2)
      sum = sum + ak(k + 1) * cos (xp(j + 1) * k)
      k = k + 1
    endwhile
    qnp(j+1) = ak(1)/2 + sum
    sum = 0
    k = 1
    while(k <= (num - modValue)/2 - 1)
      sum = sum + bk(k+1) *sin (xp(j + 1) * k)
      k = k + 1
    endwhile
    qnp(j+1) = qnp(j+1) + sum
    j = j + 1
  endwhile
endif

while( i <= 100)
  pohibka(i) = funcp(i) - qnp(i)
  if(pohibka(i) < 0)
    pohibka(i) = pohibka(i) * -1
    endif
  i = i + 1

endwhile

display (ak)
display (bk)
display (qn)
display (max(pohibka))
[max_values,indices] =max(pohibka,[],2)
display(xp(indices))

figure
plot(xp,funcp,'--r', xp, qnp, '-.b', xp(indices), funcp(indices), 'k')




