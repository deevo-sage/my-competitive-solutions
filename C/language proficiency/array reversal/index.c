#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num, *arr, i,*ar,j;
    scanf("%d", &num);
    arr = (int*) malloc(num * sizeof(int));
    ar = (int*) malloc(num * sizeof(int));
    for(i = 0; i < num; i++) {
        scanf("%d", arr + i);
    }

for(i=0,j=num-1;i<num;i++,j--)
{
    ar[i]=arr[j];
}
    /* Write the logic to reverse the array. */

    for(i = 0; i < num; i++)
        printf("%d ", *(ar + i));
    return 0;
}