-- Quicksort implementation
quicksort [] = []
quicksort (x : xs) = quicksort less ++ [x] ++ quicksort more
                        where less = [a | a <- xs, a <= x]
                              more = [b | b <- xs, b > x]
