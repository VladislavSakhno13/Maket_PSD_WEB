let image = [
    {"id":1,
    "url":"image_for_form/12.png"
     },
     {"id":2,
    "url":"image_for_form/263751_10150311004175552_5351131_n.png"
     },
     {"id":3,
    "url":"image_for_form/267685_10150283903080552_1063545_n.png"
     },
     {"id":4,
    "url":"image_for_form/428519_10150960212590552_454428673_n.png"
     },
     {"id":5,
    "url":"image_for_form/535243_10150923064910552_1460192173_n.png"
     },
     {"id":6,
    "url":"image_for_form/546607_10150838712365552_1477240533_n.png"
     },
     {"id":7,
    "url":"image_for_form/Layer-22.png"
     },
     {"id":8,
    "url":"image_for_form/Layer-23.png"
     },
     {"id":9,
    "url":"image_for_form/Layer-25.png"
     },
     {"id":10,
    "url":"image_for_form/Layer-26.png"
     },
     {"id":11,
    "url":"image_for_form/Layer-27.png"
     },
     {"id":12,
    "url":"image_for_form/OgAAALbpt3uDmi6fsmai8KVRz0eGGZNJnmsAdLX1yLZK7fy55hrzTVgME5kX7EtEI44xBSmYihS5-BHx1PhKpjLk9VAAm1T1UOucP8MqcBGCtU9yhowKAjRtNImX.png"
     }
]

function view(image){
    for(let i = 0; i < image.length;i++){
       const boxForm = document.createElement('div');
       boxForm.className = "formImage";
       document.getElementById('image').appendChild(boxForm);
       const img = document.createElement('img');
       img.className = "img_form";
       img.src = image[i].url;
       boxForm.appendChild(img);
       const p = document.createElement('p');
       p.className = "titletext";
       boxForm.appendChild(p);
       const span = document.createElement('span');
       span.innerHTML = "Lorem lpsum is simply";
       p.appendChild(span);
       const pstar = document.createElement('p');
       pstar.className = "stars";
       boxForm.appendChild(pstar);
       const iconStar = document.createElement('img');
       iconStar.src = "Layer-17.png";
       pstar.appendChild(iconStar);
       const line = document.createElement('div');
       line.className = "lineform";
       boxForm.appendChild(line);
       const textp = document.createElement('p');
       textp.className = "underline";
       boxForm.appendChild(textp);
       const text = document.createElement('span');
       text.innerHTML = "Share";
       text.id = "share";
       textp.appendChild(text);
       const ptwitter = document.createElement('p');
       ptwitter.className = "round";
       ptwitter.id = 'img_1';
       boxForm.appendChild(ptwitter);
       const pfacebock = document.createElement('p');
       pfacebock.className = "round";
       pfacebock.id = 'img_2';
       boxForm.appendChild(pfacebock);
       const pP = document.createElement('p');
       pP.className =  "round";
       pP.id = 'img_3';
       boxForm.appendChild(pP);
       const pt = document.createElement('p');
       pt.className = "round";
       pt.id = 'img_4';
       boxForm.appendChild(pt);
       const img1 = document.createElement('img');
       img1.src = "round/Facebook.png";
       img1.className = "centre";
       pfacebock.appendChild(img1);
       const img2 = document.createElement('img');
       img2.src = "round/Layer-16.png";
       img2.className = "centre";
       pP.appendChild(img2);
       const img3 = document.createElement('img');
       img3.src = "round/Layer-18.png";
       img3.className = "centre";
       pt.appendChild(img3);
       const img4 = document.createElement('img');
       img4.src = "round/tumblr.png";
       img4.className = "centre";
       ptwitter.appendChild(img4);

        

    }
}
view(image);