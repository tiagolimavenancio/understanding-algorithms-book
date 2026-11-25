quicksort([10, 4, 7, 2, 10, -1, 5]);

1ª chamada:
length = 7
pivotIndex = 3
pivot = 2
left = [-1]
right = [10,4,7,10,5]

2ª chamada — esquerda: quicksort([-1]) -> [-1]

2ª chamada — direita: quicksort([10,4,7,10,5]);
length = 5
pivotIndex = 2 
pivot = 7
left = [4,5]
right = [10,10]

3ª chamada — esquerda: quicksort([4,5]);
length = 2
pivotIndex = 1 
pivot = 5
left = [4]
right = []

3ª chamada — direita: quicksort([10,10]);
length = 2
pivotIndex = 1 
pivot = 10
left = []
right = [10]

4ª chamada — direita: quicksort([10]) -> [10]
4ª chamada — esquerda: quicksort([4]) -> [4]

retorno 4ª chamada - esquerda: [4]
retorno 4ª chamada - direita: [10]

retorno 3ª chamada — direita: [10] + [10] + [] -> [10,10]
retorno 3ª chamada — esquerda: [4] + [5] + [] -> [4,5]

retorno 2ª chamada — direita: [4,5] + [7] + [10,10] -> [4,5,7,10,10]
retorno 2ª chamada — esquerda: [-1]

retorno 1ª chamada: [-1] + [2] + [4,5,7,10,10] -> [-1,2,4,5,7,10,10]
