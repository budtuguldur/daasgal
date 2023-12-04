function towerOfHanoi(n, from_rod, to_rod, aux_rod)
{
if (n == 1) {
 console.log("Move from rod " + from_rod
 + " to rod " + to_rod);
return;
 }
 towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
 towerOfHanoi(1, from_rod, to_rod, aux_rod);
 towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}
let N = 3;
towerOfHanoi(N, 'A', 'C', 'B');
