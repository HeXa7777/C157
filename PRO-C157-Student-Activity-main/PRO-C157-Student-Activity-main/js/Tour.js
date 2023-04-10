AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
      id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item.id)
      // Thumbnail Element
      const thumbnailEl = this.createThumbnail(item)
      // Title Text Element
      const titleEl = this.createTitle(position,item)
      
      this.placesContainer.appendChild(borderEl);
      borderEl.appendChild(thumbnailEl);
      borderEl.appendChild(titleEl);
    }
  },
      createBorder:function (position,id){
       const entityEl=document.createElement("a-entity")
       entityEl.setAttribute("id",id)
       entityEl.setAttribute("visible",true)
       entityEl.setAttribute("position",position)
       entityEl.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
       entityEl.setAttribute("material",{color:"black"})
       return entityEl;
      },
      createThumbnail:function (item){
        const entityEl=document.createElement("a-entity")
       entityEl.setAttribute("visible",true)
       entityEl.setAttribute("geometry",{primitive:"circle",radius:9})
       entityEl.setAttribute("material",{src:item.url})
       return entityEl;
      },
      createTitle:function (position,item){
        const entityEl=document.createElement("a-entity")
       entityEl.setAttribute("visible",true)
       const el=position;
       el.y=-20
       entityEl.setAttribute("position",el)
       entityEl.setAttribute("text",{color:"darkgreen",align:center,value:item.title})
       return entityEl;

      },

});
