### **2️⃣ Short Answer Questions (2 Questions)**  

7. **Explain the difference between `position: relative` and `position: absolute` in CSS.**

Write your answer here.
Be as detailed as possible.
You can provide a code snippet using markdown format.




position:relative moves the element relative to its original position in the flow without affecting the rest of the layout. for example:

.order-list{
  position: relative;
  bottom: 30px; 
  right: 10px; 
}


 while 'postion:absolute' positions the element outside the flow using its closest positioned ancestor as a reference.
for example:

.order-list{
  position: relative;
  bottom: 30px; /* moves 30px from the top of its ancestor */
  right: 10px; /* moves 10px from the left of its ancestor*/
}

