---
title: 数学考试压轴题详解
icon: page
order: 2
category:
  - 数学
---
## 2024浙江名校开学考压轴题

::: info 题目重现

$\qquad$ 对于一个四元整数集 $A= \left\{ a,b,c,d \right\}$ ，如果它能划分成两个不相交的二元子集$\left\{a,b\right\}$和$\left\{c,d\right\}$，满足$ab-cd=1$，则称这个四元整数集为“有趣的”.

(1)写出集合$\left\{1，2，3，4，5，6，7，8\right\}$的一个“有趣的"四元子集：

(2)证明：集合$\left\{1,2,3，4，5，6，7，8\right\}$不能划分成两个不相交的“有趣的"四元子集：

(3)证明：对任意正整数$n (n≥2)$，集合$\left\{1,2,3，…，4n\right\}$不能划分成$n$个两两不相交的“有趣的"四元子集.

:::

情况复杂，变化中寻找不变，例如总和、乘积、奇偶性等等。

$$ab - cd = 1.$$

说明$ab$，$cd$一奇一偶，进而$\left\{ a,b,c,d \right\}$中至少有两个奇数，且有两个奇数相乘。
又总共$2n$个奇数，所以$n$个有趣$4$元集中，各恰有两个奇数，且两个奇数相乘。



::: tip 解析

假设可以分成n个有趣四元集$S_i=\left\{a_i,b_i,c_i,d_i\right\}$，由上述分析，不妨设$a_i,b_i$是偶数，$c_i,d_i$是奇数，$i = 1,2,….,n$，则$a_i b_i-c_i d_i =\pm1$

:::

感受矛盾，大小有问题，奇数恰好对应着比偶数小1，奇数是不够的。

如何去刻画这种整体的矛盾？如果是$a_i b_i=c_i d_i$或者$a_i +b_i=c_i +d_i$，就十分容易，全部累乘或累加，矛盾显然.但此时的$a_i b_i-c_i d_i =\pm1$有加有乘且不确定。

回到关键式子$a_i b_i-c_i d_i =\pm1$，其实只比$a_i b_i=c_i d_i$差了一点，能否推出类似的式子，或稍弱一些的式子呢。可以适当放缩，但一定要形式好。
还是因为奇数恰好对应着比偶数小1，我们发现

::: tip 解析

因为$a_i b_i-c_i d_i =\pm1$，所以
$$a_i b_i-c_i d_i \leq c_i d_i +1 < (c_i +1)(d_i +1) .$$
将n个式子累乘，得
$$2\cdot 4\cdot \ \cdot\cdot\cdot \ \cdot (2n)=a_1 b_1 \cdot\cdot\cdot a_n b_n < (c_1+1)(d_1+1)\cdot\cdot\cdot=2\cdot 4\cdot \ \cdot\cdot\cdot \ \cdot (2n)$$
矛盾.

:::
## 2024海淀二模数学压轴21题

::: info 题目重现

设正整数 $n\leq2, \ a_i\in \mathbb{N}^*,\ d_i\in \mathbb{N}^*,\ A_i=\{ x \vert x=a_i+(k-1)d, \ k=1,2,...,\},\ =1,2,...,n.$ 

若$A_1\cap A_2\cap ... \cap A_n =\emptyset ,\ A_1\cup A_2\cup ... \cup A_n=\mathbb{N}^*$，则称 $A_1, A_2, ... ,  A_n$ 具有性质$P.$

:::

集合$A_i$中的元素按自小到大的顺序构成首项为$a_i$，公差为$d_i$的等差序列.

故当$N\geq a_i$时，任意连续的$d_i$个正整数
$$N,N+1,N+2,...,N+d_i-1$$
中恰有一个属于集合$A_i.$

::: info 第一问

$(I)$ 当$n=3$时，若$A_1, A_2, A_3$具有性质$P$，且$a_1=1,\ a_2=2,\ a_3=3$，令$m=d_1d_2d_3$，写出$m$的所有可能值.

:::

对于第一问，可使用枚举法
$$
\begin{matrix}

1)\ 4 \in A_1. &  i)\ 5\in A_2,& m=27. \\
               & ii)\ 5\in A_3,& 矛盾.\ \ \ \ \\
2)\ 4 \in A_1. &  i)\ 5\in A_1,& m=32. \\
               & ii)\ 5\in A_3,& 矛盾.\ \ \ \ \\
3)\ 4 \in A_1. & 矛盾. \ \ \ \ \ \ \ \ \ & 

\end{matrix}
$$


::: tip 解析

$m$所有可能的取值为27和32.

:::

::: info 第二问

$(II)$ 若$A_1, A_2, ... ,  A_n$具有性质$P.$

$\ \ \ \ (i)$ 求证：$a_i\leq d_i \ (i=1,2,...,n)$.

$\ \ \ \ (ii)$ 求$\displaystyle\sum_{i=1}^n \frac{a_i}{d_i}$的值.
:::

> 对于$(i)$，可以用常规反证法：
>
> 假设 $\exists i \in \{1,2,...,n\},\ a_i>d_i$，设$t=a_i-d_i \in \mathbb{N}^*$，
>
> 则$\exists j\in \{1,2,...,n\}$，$j\neq i$，$t = a_j +(p-1)d_j\in A_j$，$p\geq 1$.
>
> 当$k=d_j\geq1$，$t+d_id_j=a_i+(k-1)d_i \in A_i$；
>
> 当$k=d_i+p\geq 1$，$t+d_ij_i=a_j+(k-1)d_j \in A_j$.
>
> 此时至少存在$t+d_ij_i\in A_i\cap A_j$，与题设$A_i\cap A_j=\emptyset$不符. 故假设不成立.


对于数列$A_i$，每隔$d_i$个数有一个数落在集合$A_i$，故随机取一个数，落在集合$A_i$的概率应是$\dfrac{1}{d_i}$.
对于$A_1, A_2, ... ,  A_n$，落在他们中的概率和应该是1，也即

::: tip 解析

首先证明：$\displaystyle\sum_{i=1}^n\dfrac{1}{d_i}=1.$
令$m=d_1d_2...d_n$，$N=max{a_1,a_2,...,a_n}$，考虑
$$N,N+1,N+2,...,N+m-1$$
这m个数. 其中恰有$\dfrac{m}{d_i}$个属于集合$A_i$，故
$$\displaystyle\sum_{i=1}^n\dfrac{m}{d_i}=m$$

:::

::: tip 解析

其次证明：$a_i\leq d_i \ (i=1,2,...,n)$.

令$m=d_1d_2...d_n$，考虑$1,2,...,m$这$m$个数. 设其中恰有$t_i$个属于集合$A_i$，则
$$t_i\leq\dfrac{m}{d_i}\ (当且仅当a_i\leq d_i时，等号成立)$$
所以，
$$m=\sum_{i=1}^nt_i\leq\sum_{i=1}^n\dfrac{m}{d_i}=m$$
所以，对任意的$i=1,2,...,n$，$a_i\leq d_i$.

:::

在$1,2,...,m$这$m$个数中，属于集合$A_i$的元素应构成首项为$a_i$，公差为$d_i$，项数为$\dfrac{m}{d_i}$的等差数列

::: tip 解析

最后计算：$\displaystyle\sum_{i=1}^n \frac{a_i}{d_i}$.

令$m=d_1d_2...d_n$，考虑$1,2,...,m$这$m$个数. 其中属于集合$A_i$的元素个数为$\dfrac{m}{d_i}$，属于集合$A_i$的元素之和为
$$\dfrac{m}{d_i}\cdot a_i+ \dfrac{1}{2}\cdot\dfrac{m}{d_i}\left(\dfrac{m}{d_i}-1\right)\cdot d_i=m\cdot\left(\dfrac{a_i}{d_i}+\dfrac{m}{2}\cdot\dfrac{1}{d_i}-\dfrac{1}{2}\right).$$
所以，

$$\sum_{i=1}^n\left[m\cdot \left(\dfrac{a_i}{d_i}+\dfrac{m}{2}\cdot\dfrac{1}{d_i}-\dfrac{1}{2}\right)\right]=\dfrac{m(m+1)}{2}.$$
上式约去$m$，得
$$\displaystyle\sum_{i=1}^n \left(\dfrac{a_i}{d_i}+\dfrac{m}{2}\cdot\dfrac{1}{d_i}-\dfrac{1}{2}\right)=\dfrac{m+1}{2}.$$
整理可得，
$$\sum_{i=1}^n \dfrac{a_i}{d_i}+\dfrac{m}{2}\sum_{i=1}^n\dfrac{1}{d_i}-\dfrac{n}{2}=\dfrac{m+1}{2}.$$
带入$\displaystyle\sum_{i=1}^n\dfrac{1}{d_i}=1$，得
$$\sum_{i=1}^n \dfrac{a_i}{d_i}+\dfrac{m}{2}-\dfrac{n}{2}=\dfrac{m+1}{2}.$$
所以，
$$\sum_{i=1}^n \dfrac{a_i}{d_i}=\dfrac{n(n+1)}{2}$$
:::




