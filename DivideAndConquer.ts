function FindMax(array: number[], left: number, right: number): number
{
    // Check when left and right 'pointers' are the same
    // Meaning that we have a one element array
    if (left == right)
    {
        return array[left];
    }
    else
    {
        // Calculate the mid point
        let mid = Math.floor((left + right) / 2);

        // Call the function recursively for both the left and right side
        let maxLeft = FindMax(array, left, mid);
        let maxRight = FindMax(array, mid + 1, right);

        // Return the max number
        return maxLeft > maxRight ? maxLeft : maxRight;
    }
}

console.log(FindMax([3.13, 4000, 100, 13182390, 27.412], 0, 4));