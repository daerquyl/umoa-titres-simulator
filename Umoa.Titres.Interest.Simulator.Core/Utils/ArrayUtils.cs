namespace Umoa.Titres.Interest.Simulator.Core.Utils;

public static class ArrayUtil 
{
    public static void Resize2(this object[,] array, int size1, int size2)
    {
        var newArray = new object[size1, size2];
        Array.Copy(array, newArray, Math.Min(array.Length, newArray.Length));
        array = newArray;
    }
}