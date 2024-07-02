const customers= [


    {
        name: "Isira",
        age: 23 ,
        address:"Kelaniya" 


    }
]

function addCustomer() {

    let name = document.getElementById("txtName").value;
    let age = document.getElementById("txtAge").value;
    let address = document.getElementById("txtAddress").value;

    customers.push({

        name,
        age,
        address
    })

    console.log(customers);
}