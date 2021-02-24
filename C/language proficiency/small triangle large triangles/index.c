#include <stdio.h>
#include <stdlib.h>
#include <math.h>

struct triangle
{
	int a;
	int b;
	int c;
};

typedef struct triangle triangle;
void sort_by_area(triangle* tr, int n) {
	float*a;
    a=(float*)malloc(n*sizeof(float));
    for(int i=0;i<n;i++)
    {
     float s=(tr[i].a+tr[i].b+tr[i].c)/2.0;
     a[i]=(s*(s-tr[i].a)*(s-tr[i].b)*(s-tr[i].c));
    }
    for(int i=0;i<n-1;i++)
    {int temp,sm=a[i],pos=i;
    triangle tmp;
     for(int j=i+1;j<n;j++)
     {if(a[j]<sm)
     {
         sm=a[j];
         pos=j;
         
     }
     }
    
     temp=a[i];
     a[i]=sm;
     a[pos]=temp;
     tmp=tr[i];
     tr[i]=tr[pos];
     tr[pos]=tmp;
    }
}

int main()
{
	int n;
	scanf("%d", &n);
	triangle *tr = malloc(n * sizeof(triangle));
	for (int i = 0; i < n; i++) {
		scanf("%d%d%d", &tr[i].a, &tr[i].b, &tr[i].c);
	}
	sort_by_area(tr, n);
	for (int i = 0; i < n; i++) {
		printf("%d %d %d\n", tr[i].a, tr[i].b, tr[i].c);
	}
	return 0;
}