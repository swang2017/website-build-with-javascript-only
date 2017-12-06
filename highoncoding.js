let divAll=document.getElementById("container")
   let divItem1= document.createElement("div")
      divItem1.className = "header"
          let title=document.createElement("div")
          title.className = "headerDiv"
          title.innerHTML="HighOnCoding"
            divItem1.appendChild(title)
          let menuList=document.createElement("div")
          menuList.className = "headerDiv"
              let list1=document.createElement("li")
              let homeLink = document.createElement("a")
              homeLink.innerHTML = "Home"
              homeLink.href = "index.html"

              list1.appendChild(homeLink)

                  menuList.appendChild(list1)
              let list2=document.createElement("li")
                  list2.innerHTML="Categories"
                  menuList.appendChild(list2)
          divItem1.appendChild(menuList)

    let divItem2= document.createElement("div")
       divItem2.className = "body1"
           let pTitle=document.createElement("div")
           pTitle.className="pTitle"
            pTitle.innerHTML="Curse of the current Reviews"
           let pBody=document.createElement("div")
           pBody.innerHTML="When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews. "
             divItem2.appendChild(pTitle)
             divItem2.appendChild(pBody)
    let divItem3= document.createElement("div")
          divItem3.className = "body2"
              let pTitle1=document.createElement("div")
              pTitle1.className ="pTitle1"
               pTitle1.innerHTML="Hello WatchKit"
              let pBody1=document.createElement("div")
              pBody1.innerHTML="When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews. "
                divItem3.appendChild(pTitle1)
                divItem3.appendChild(pBody1)
    let divItem4 = document.createElement("div")
      divItem4.className = "comment"
          let comment1list1=document.createElement("li")
              comment1list1.innerHTML="12 comments"
              divItem4.appendChild(comment1list1)
          let comment1list2=document.createElement("li")
              comment1list2.innerHTML="124 likes"
              divItem4.appendChild(comment1list2)

    let divItem5= document.createElement("div")

        divItem5.className = "body2"
        let pTitle2=document.createElement("div")
        pTitle2.className = "pTitle1"
         pTitle2.innerHTML="Introduction to swift"
        let pBody2=document.createElement("div")
        pBody2.innerHTML="When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews. "
          divItem5.appendChild(pTitle2)
          divItem5.appendChild(pBody2)
    let divItem6= document.createElement("div")
          divItem6.className = "comment"
          let comment2list1=document.createElement("li")
              comment2list1.innerHTML="12 comments"
              divItem6.appendChild(comment2list1)
          let comment2list2=document.createElement("li")
              comment2list2.innerHTML="124 likes"
              divItem6.appendChild(comment2list2)



    divAll.appendChild(divItem1)
    divAll.appendChild(divItem2)
    divAll.appendChild(divItem3)
    divAll.appendChild(divItem4)
    divAll.appendChild(divItem5)
    divAll.appendChild(divItem6)
