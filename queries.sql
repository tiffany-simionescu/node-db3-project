-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName, CategoryName FROM Product AS p
JOIN Category AS c ON p.CategoryId = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT OrderId, ShipName FROM "Order" AS o
JOIN "OrderDetail" AS od ON o.Id = od.OrderId
WHERE OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, Quantity FROM OrderDetail AS od
JOIN Product AS p ON od.ProductId = p.Id
WHERE OrderId = 10251
ORDER BY ProductName
LIMIT 3;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
Select OrderId, ShipName, LastName FROM "OrderDetail" AS od
JOIN "Order" AS o ON od.OrderId = o.Id
JOIN "Employee" AS e ON o.employeeId = e.Id;
