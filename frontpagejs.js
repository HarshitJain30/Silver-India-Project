const chevronLeft = document.getElementById("chevronleft");
const chevronRight = document.getElementById("chevronright");
const photo = document.getElementById("photo");
const textss = document.querySelector("#text");
const heading = document.querySelector("#headingtext");
const getPhoto = (e) => {
return window.getComputedStyle(e).backgroundImage;
}
var texts = [
{
heading1: "Buddhist Style Statue",
text1: "This is a statue of a deity with eight arms and many faces. The statue is a depiction of Avalokiteshvara, a bodhisattva of compassion in Mahayana Buddhism. Avalokiteshvara is often depicted with multiple arms to signify the many ways they can intervene in the world to help others. The statue is made of silver and turquoise, and it is seated on a pedestal. It is a beautiful and intricate work of art."
},
{ heading2: "Antique Coral Necklace",
text2: "This a tribal style necklace made of silver and coral. The necklace consists of a simple silver chain with evenly spaced coral beads. The coral beads have a reddish orange color. Silver and coral jewelry is a popular combination, especially in Mediterranean cultures. The red coral adds a pop of color to the silver, and the silver helps to enhance the natural beauty of the coral. This type of necklace is a versatile piece of jewelry that can be dressed up or down."
},
{
heading3: "Leather-Silver Necklace",
text3: "This is a turquoise and silver pendant on a black leather necklace. The pendant is a simple geometric design, with a teardrop-shaped piece of turquoise set in the center. The silver surrounding the turquoise is smooth and polished. The black leather necklace is thin and adds a touch of contrast to the silver pendant. This pendant is a versatile piece of jewelry that could be worn with a variety of outfits. The turquoise stone adds a pop of color, while the silver and black keep the overall look classic."
}
];
photo.style.backgroundImage = "url('photo2.png')";
const photop2 = getPhoto(photo);
photo.style.backgroundImage = "url('photo3.png')";
const photop3 = getPhoto(photo);
photo.style.backgroundImage = "url('photo1.png')";
const photop1 = getPhoto(photo);
chevronLeft.addEventListener('click', () => {
if(getPhoto(photo) == photop1)
{
photo.style.backgroundImage = photop3;
heading.innerText = "Leather-Silver Necklace";
textss.innerText = "This is a turquoise and silver pendant on a black leather necklace. The pendant is a simple geometric design, with a teardropshaped piece of turquoise set in the center. The silver surrounding the turquoise is smooth and polished. The black leather necklace is thin and adds a touch of contrast to the silver pendant. This pendant is a versatile piece of jewelry that could be worn with a variety of outfits. The turquoise stone adds a pop of color, while the silver and black keep the overall look classic."
}
else if (getPhoto(photo) == photop2)
{
photo.style.backgroundImage = photop1;
heading.innerText = "Buddhist Style Statue";
textss.innerText = "This is a statue of a deity with eight arms and many faces. The statue is a depiction of Avalokiteshvara, a bodhisattva of compassion in Mahayana Buddhism. Avalokiteshvara is often depicted with multiple arms to signify the many ways they can intervene in the world to help others. The statue is made of silver and turquoise, and it is seated on a pedestal. It is a beautiful and intricate work of art."
}
else {
photo.style.backgroundImage = photop2;
heading.innerText = "Antique Coral Necklace";
textss.innerText = "This a tribal style necklace made of silver and coral. The necklace consists of a simple silver chain with evenly spaced coral beads. The coral beads have a reddish orange color. Silver and coral jewelry is a popular combination, especially in Mediterranean cultures. The red coral adds a pop of color to the silver, and the silver helps to enhance the natural beauty of the coral. This type of necklace is a versatile piece of jewelry that can be dressed up or down."
}
});
chevronRight.addEventListener('click', () => {
if(getPhoto(photo) == photop1)
{
photo.style.backgroundImage = photop2;
heading.innerText = "Antique Coral Necklace";
textss.innerText = "This a tribal style necklace made of silver and coral. The necklace consists of a simple silver chain with evenly spaced coral beads. The coral beads have a reddish orange color. Silver and coral jewelry is a popular combination, especially in Mediterranean cultures. The red coral adds a pop of color to the silver, and the silver helps to enhance the natural beauty of the coral. This type of necklace is a versatile piece of jewelry that can be dressed up or down."
}
else if (getPhoto(photo) == photop2)
{
photo.style.backgroundImage = photop3;
heading.innerText = "Leather-Silver Necklace";
textss.innerText = "This is a turquoise and silver pendant on a black leather necklace. The pendant is a simple geometric design, with a teardropshaped piece of turquoise set in the center. The silver surrounding the turquoise is smooth and polished. The black leather necklace is thin and adds a touch of contrast to the silver pendant. This pendant is a versatile piece of jewelry that could be worn with a variety of outfits. The turquoise stone adds a pop of color, while the silver and black keep the overall look classic."
}
else {
photo.style.backgroundImage = photop1;
heading.innerText = "Buddhist Style Statue";
textss.innerText = "This is a statue of a deity with eight arms and many faces. The statue is a depiction of Avalokiteshvara, a bodhisattva of compassion in Mahayana Buddhism. Avalokiteshvara is often depicted with multiple arms to signify the many ways they can intervene in the world to help others. The statue is made of silver and turquoise, and it is seated on a pedestal. It is a beautiful and intricate work of art."
}
});