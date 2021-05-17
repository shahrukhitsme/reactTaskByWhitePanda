class StockSpanner {
    Stack<Integer> stock;
    List<Integer> stocks;
    public StockSpanner() {
        stock = new Stack<>();
        stocks = new ArrayList<>();
    }
    
    public int next(int price) {
        stocks.add(price);
        int res = 1;
        while(!stock.isEmpty() && stocks.get(stock.peek())<=price)
            stock.pop();
        if(stock.isEmpty())
            res = stocks.size();
        else
            res = stocks.size()-stock.peek()-1;
        stock.push(stocks.size()-1);
        return res;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner obj = new StockSpanner();
 * int param_1 = obj.next(price);
 */