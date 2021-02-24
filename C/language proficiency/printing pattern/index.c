#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{

    int n;
    scanf("%d", &n);
  	for(int i=1;i<n*2;i++)
      {for(int j=1,k=n;j<n*2;j++)
      {//up left
        if(i<n&&j<n&&j<i)
        {
            printf("%d ",k);
            k--;
        }
        else if(i<n&&j<n&&j>=i&&j<n*2-i)
        {
             printf("%d ",k);
        }
        
        //down left
        else if(i>n&&j<n&&j<n*2-i)
        {
            printf("%d ",k);
            k--;
        }
        else if(i>n&&j<n)
        {
             printf("%d ",k);
        }
        //up right
        else if(i<n&&j>n&&j<n*2-i)
        {
            printf("%d ",k);
            
        }
        else if(i<n&&j>n)
        {
             printf("%d ",k);
             k++;
        }
        //down right
        else if(i>n&&j>n&&j<i)
        {
            printf("%d ",k);
             
        }
        else if(i>n&&j>n)
        {
             printf("%d ",k);
            k++;
        }
        //middle vertical
         else if(i>n&&j==n)
        {
             printf("%d ",k);
            
        }
         else if(i<n&&j==n)
        {
             printf("%d ",k);
        }
        //middle horizontal
       else if(i==n&&j>n&&j<n*2-i)
        {
            printf("%d ",k);
            
        }
        else if(i==n&&j>n)
        {
             printf("%d ",k);
             k++;
        }
        else if(i==n&&j<n&&j<i)
        {
            printf("%d ",k);
            k--;
        }
        else if(i==n&&j==n)
        {
            printf("%d ",k);
            k++;
        }
        else {
        printf(" ");
        }
       
      }
printf("\n");
      }
    return 0;
}