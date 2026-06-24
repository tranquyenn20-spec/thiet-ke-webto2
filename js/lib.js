/*Viết mã Javascript*/
function printBCC(num)
{
    let result = "";

    let i = 1;
    while(i<=10)
    {
        result += `${num} x ${i} = ${num*i} <br>`; 
        i++;
    }
    //Đưa kết quả vào thẻ div có id là "result"
    document.getElementById("result").innerHTML = result;
}
const products = [
    {
        name: "chó poodle",
        price: "1.000.000đ",
        image: "../assets/image/poodle.png",  
        info: " Chó săn vịt là một hậu duệ của các giống chó French Water Dog, Barbet và Hungarian Water Hound",
        link: "#"
    },
    {
        name: "chó poodle",
        price: "1.000.000đ",
        image: "../assets/image/poodle.png",  
        info: " Chó săn vịt là một hậu duệ của các giống chó French Water Dog, Barbet và Hungarian Water Hound",
        link: "#"
    },
    {
        name: "chó poodle",
        price: "1.000.000đ",
        image:"../assets/image/poodle.png",
        info: " Chó săn vịt là một hậu duệ của các giống chó French Water Dog, Barbet và Hungarian Water Hound",
        link: "#"
    },
    {
        name: "chó poodle",
        price: "1.000.000đ",
        image: "../assets/image/poodle.png", 
        info: " Chó săn vịt là một hậu duệ của các giống chó French Water Dog, Barbet và Hungarian Water Hound",
        link: "#"
    }
]

function createItem(obj) 
{
    const productList = document.getElementById("product-list")
    productList.innerHTML += `
    <div class ="col product-item">
				<div class="card ">
					<div class=" ratio ratio-1x1 product-image">
						<img src= "${obj.image}" alt="${obj.name}" class="card-img-top object-fit-cover">
					</div>
					<div class="card-body product-info">
						<h4 class="card title">${obj.name}</h4>
						<h6 class="text-danger">${obj.price}</h6>
						<p>${obj.info}</p>
						<a href="${obj.link}" class="btn btn-primary">chi tiết</a>
					</div>
	            </div>
    </div>`;
}

function AllItem (objArray) {
    let i = 0;
    while (i<objArray.length) {
        createItem(objArray[i]);
        i++;
    }
  
} 