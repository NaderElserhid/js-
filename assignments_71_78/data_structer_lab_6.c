
#include "stdio.h"
#include "stdlib.h"


// struct man{
// int newVar ;
// };
// struct manager{
// 	int a;
// 	int b;
// 	int m;
// 	struct man *man1;
// };

void main(){
    
    // struct manager manager1;

	//  struct manager *c1 = &manager1;

	//  c1->a = 10;
	//  c1->b = 20;
	//  c1->man1->newVar  =10;

	//  printf("%d this is good"  , c1->man1->newVar);

	int i=1;
	int *p = &i;
	int q = p;
	*q =5;
	printf("%d",*p);

}