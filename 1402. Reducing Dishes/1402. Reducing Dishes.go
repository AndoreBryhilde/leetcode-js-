func maxSatisfaction(satisfaction []int) int {
    sort.Ints(satisfaction)
    sum:=0
    temp:=0
    for i:=len(satisfaction)-1;i>=0;i-- {
        if satisfaction[i] + sum + temp > sum {
            temp+=satisfaction[i]
            sum+=temp
        }
    }
    return sum
}
