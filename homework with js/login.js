const members = []


const oneMember = (member) => {
    const tbody = document.getElementById('tbody')
    const newEl = document.createElement('tr')
    newEl.innerHTML = ` 
         <td>${member.Name}</td>
         <td>${member.Email}</td>       
         <td>${member.Country}</td>       
    `
    tbody.appendChild(newEl) 
}




const allMembers = (arr) => {
    arr.forEach(element => {
        oneMember(element)
    });
}

const HandleSubmit = (event) => {
    event.preventDefault();
    const Name = document.getElementById('in-Name').value
    const Email = document.getElementById('in-email').value
    const Country = document.getElementById('country').value
    console.log(Name)
    console.log(Email)
    console.log(Country)
    
    const newmember = {
        Name,
        Email,
        Country,
    }
    members.push(newmember)
    oneMember(newmember)
    
    console.log(members)

}


allMembers(members)