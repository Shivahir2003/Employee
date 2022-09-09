import './Footer.css';
import React from 'react'

export default function Footer() {
  return (
    <>
        <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Why <span className='color-change'>EMPLOYEE++ </span> <span className='span-2'>?</span></h6>
            <p class="text-justify text-custom"> NOW, Manage Employee Made Easy  Get Better UI Experience</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Access</h6>
            <ul class="footer-links">
              <li><a  href="">Home</a></li>
              <li><a  href="">Add Employee</a></li>
              <li><a  href="">About</a></li>
              
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Contribute</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text text-custom-2">Copyright &copy; 2022 All Rights Reserved 
           
         
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">

            
              <li><a class="facebook" href="#"><i class="fa fa-facebook">  <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTTE1LDNDOC4zNzMsMywzLDguMzczLDMsMTVjMCw2LjAxNiw0LjQzMiwxMC45ODQsMTAuMjA2LDExLjg1MlYxOC4xOGgtMi45Njl2LTMuMTU0aDIuOTY5di0yLjA5OWMwLTMuNDc1LDEuNjkzLTUsNC41ODEtNSBjMS4zODMsMCwyLjExNSwwLjEwMywyLjQ2MSwwLjE0OXYyLjc1M2gtMS45N2MtMS4yMjYsMC0xLjY1NCwxLjE2My0xLjY1NCwyLjQ3M3YxLjcyNGgzLjU5M0wxOS43MywxOC4xOGgtMy4xMDZ2OC42OTcgQzIyLjQ4MSwyNi4wODMsMjcsMjEuMDc1LDI3LDE1QzI3LDguMzczLDIxLjYyNywzLDE1LDN6Ij48L3BhdGg+PC9zdmc+"/> </i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter">   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACFUlEQVRIie3VO2hUQRTG8Z/GF0FQJIogiGBcbSxiCrFQ2EYRMY2IVgpipZ2FEmxEEKwkAUVsAoqFCCmiYBARjGksBLURX4VPjCLG+IhEYmIxs2R23VeyG7HIB5fZO+eb+d8995y5zGhGU1cT2vEEwzg83cAWdOEnxpNraDpgc7Ab/QnoN67jQLz/WE9gLp2vE+AXnMHq6GmL87fqAVyHTvxIgM9wDIsLvCdi/PRUYQ3YhTv+TudWzCqxrid6904WuARH8VJ+oXSgucCbRTfmJXNv4ppMtcCMkM7vCfC54ulcgUsYwNpkflnyoLMrAXfidgIbQy+2F1m8AMeFdz0gvPtU2+IedytBzyXArzhb8A9SteFF9H7C+iKe9hjvqAQejMY+LC3hyeBG8oCD2FDCezV69lcCX0k2HMAprIqxhUJLjMjPysYy++UyUiwbeWrAQTyS3zK9eJfMjQtFt7nMXouE+hgWTraq1YoL8g+J3DUiFFs5ZaP33mSgqZrwoQB8uYp1R6L3fLFgxd4SKranYK4vjlmhE4qlsiWOD6pglFSuH3NXM/aY+PRdE3o61eMYa60FPBef40ZvhYN/LN4Px/EmGqO/EaP4hfm1gOFiBIwm4yGhVd7HuX6hmjfF+4e1QmGLiVR/w44ktgavYuw+TsbfXfUAE1LcbaJwUq3EU/m1sK9e4EpaLnyvh4QzoOFfgWf0/+kP39OpbLs1428AAAAASUVORK5CYII="></img>  </i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"> <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTTE1LjIyLDVjMC44OTQsMCwzLjkyMSwwLjI0MSw1LjM0NywzLjMzNmMwLjQ3NiwxLjAzMywwLjM1OCwyLjg0MiwwLjI2Myw0LjI5NmwtMC4wMDQsMC4wNjQgYy0wLjAxMywwLjIwMy0wLjAyNiwwLjM5OS0wLjAzNywwLjU4N2MwLjAyMywwLjAyMywwLjIwNSwwLjE5MiwwLjYxNywwLjIwOGgwLjAwMWMwLjMxMy0wLjAxMiwwLjY3My0wLjEwOCwxLjA2Ny0wLjI4NyBjMC4xMTYtMC4wNTMsMC4yNDQtMC4wNjQsMC4zMzItMC4wNjRjMC4xMzQsMCwwLjI2OSwwLjAyNSwwLjM4MSwwLjA3MWwwLjAwNywwLjAwM2MwLjMxOSwwLjEwOSwwLjUyOCwwLjMyNiwwLjUzMywwLjU1MyBjMC4wMDQsMC4yMTMtMC4xNjQsMC41MzQtMC45ODgsMC44NDljLTAuMDg1LDAuMDMzLTAuMTk0LDAuMDY2LTAuMzExLDAuMTAyYy0wLjQ3MSwwLjE0NS0xLjE4MiwwLjM2NC0xLjQsMC44NjEgYy0wLjExOSwwLjI3Mi0wLjA4MSwwLjYwMywwLjExNCwwLjk4NWMwLjAwMiwwLjAwNCwwLjAwNCwwLjAwNywwLjAwNSwwLjAxMWMwLjA1OSwwLjEzNCwxLjQ4MywzLjI3OCw0LjY2MiwzLjc4NSBjMC4xMTcsMC4wMTksMC4yMDEsMC4xMiwwLjE5NCwwLjIzNWMtMC4wMDMsMC4wNDMtMC4wMTQsMC4wODYtMC4wMzIsMC4xMjljLTAuMTMxLDAuMjk3LTAuNzIyLDAuNzE4LTIuNzksMS4wMjcgYy0wLjE2OSwwLjAyNS0wLjIzNSwwLjIzOC0wLjMzNSwwLjY4NWMtMC4wMzcsMC4xNjMtMC4wNzQsMC4zMjMtMC4xMjUsMC40OTFjLTAuMDQ0LDAuMTQ1LTAuMTM4LDAuMjE0LTAuMjk2LDAuMjE0SDIyLjQgYy0wLjEwOSwwLTAuMjY2LTAuMDE5LTAuNDYzLTAuMDU2Yy0wLjM1LTAuMDY2LTAuNzQyLTAuMTI3LTEuMjQyLTAuMTI3Yy0wLjI5MSwwLTAuNTkzLDAuMDI1LTAuODk2LDAuMDczIGMtMC42MjEsMC4xLTEuMTQ3LDAuNDYxLTEuNzA0LDAuODQyQzE3LjI4MSwyNC40MjcsMTYuNDQ1LDI1LDE1LjE0MSwyNWMtMC4wNTcsMC0wLjExMy0wLjAwMi0wLjE2OC0wLjAwNSBDMTQuOTM4LDI0Ljk5OCwxNC45MDEsMjUsMTQuODY0LDI1Yy0xLjMwMywwLTIuMTQtMC41NzMtMi45NDktMS4xMjZjLTAuNTU4LTAuMzgyLTEuMDg1LTAuNzQ0LTEuNzA3LTAuODQzIGMtMC4zMDMtMC4wNDgtMC42MDQtMC4wNzMtMC44OTYtMC4wNzNjLTAuNTI1LDAtMC45NCwwLjA3OC0xLjI0MiwwLjEzNWMtMC4xODQsMC4wMzUtMC4zNDMsMC4wNjUtMC40NjMsMC4wNjUgYy0wLjEyNiwwLTAuMjYyLTAuMDI2LTAuMzIyLTAuMjIzYy0wLjA1MS0wLjE3LTAuMDg5LTAuMzM1LTAuMTI1LTAuNDk0Yy0wLjA5My0wLjQxLTAuMTU4LTAuNjYyLTAuMzM1LTAuNjg4IGMtMi4wNjctMC4zMDktMi42NTktMC43MzEtMi43OS0xLjAzYy0wLjAxOC0wLjA0My0wLjAyOS0wLjA4NS0wLjAzMi0wLjEyOGMtMC4wMDYtMC4xMTUsMC4wNzgtMC4yMTYsMC4xOTQtMC4yMzUgYzMuMTc3LTAuNTA3LDQuNjAyLTMuNjUzLDQuNjYyLTMuNzg2YzAuMDAyLTAuMDA0LDAuMDA0LTAuMDA3LDAuMDA1LTAuMDExYzAuMTk0LTAuMzgyLDAuMjMzLTAuNzE0LDAuMTE0LTAuOTg1IGMtMC4yMTgtMC40OTgtMC45MjktMC43MTYtMS40LTAuODYxYy0wLjExNS0wLjAzNS0wLjIyNS0wLjA2OS0wLjMxMS0wLjEwMmMtMC45NC0wLjM2LTEuMDE3LTAuNzI5LTAuOTgxLTAuOTE3IGMwLjA2My0wLjMyMSwwLjUwNS0wLjU0NSwwLjg2My0wLjU0NWMwLjA5OCwwLDAuMTg0LDAuMDE3LDAuMjU3LDAuMDVjMC40MjMsMC4xOTIsMC44MDQsMC4yODksMS4xMzIsMC4yODkgYzAuNDU0LDAsMC42NTMtMC4xODUsMC42NzYtMC4yMDljLTAuMDEyLTAuMjA4LTAuMDI2LTAuNDI1LTAuMDQtMC42NUM5LjA4LDExLjE3OSw4Ljk2Myw5LjM3Miw5LjQzNyw4LjMzOSBjMS40MjQtMy4wOTQsNC40NDYtMy4zMzQsNS4zMzctMy4zMzRDMTQuNzk5LDUuMDA0LDE1LjE2Nyw1LDE1LjE2Nyw1SDE1LjIyIE0xNS4yMiwzaC0wLjA1M2MtMC4wMTMsMC0wLjIzNSwwLjAwNC0wLjM5MiwwLjAwNyBWMy4wMDVjLTEuMTkzLDAtNS4yMzMsMC4zMjQtNy4xNTQsNC40OTdjLTAuNDg0LDEuMDUyLTAuNTYyLDIuMzU2LTAuNTI2LDMuNjUyYy0xLjE1MSwwLjAyMy0yLjQ5OCwwLjc3OC0yLjc3LDIuMTU3IGMtMC4wOTksMC41MDktMC4yMjksMi4yMywyLjIyNywzLjE3MmMwLjAxMywwLjAwNSwwLjAyNywwLjAxLDAuMDQxLDAuMDE1Yy0wLjQ5MSwwLjcwMS0xLjM5NCwxLjY3Ny0yLjcxLDEuODg3IGMtMS4xMzEsMC4xNzctMS45NCwxLjE3NS0xLjg3NiwyLjMyMWMwLjAxOCwwLjI4NiwwLjA4MiwwLjU1MiwwLjE5MSwwLjgwNWMwLjUxMywxLjE3LDEuNzU2LDEuNzAyLDMuMTc3LDIuMDEyIGMwLjMwNywwLjk5NCwxLjE4MSwxLjYzMywyLjIzMywxLjYzM2MwLjMwNSwwLDAuNTgxLTAuMDUyLDAuODI1LTAuMDk4YzAuMjcxLTAuMDUxLDAuNTQxLTAuMTAyLDAuODgtMC4xMDIgYzAuMTg2LDAsMC4zODEsMC4wMTYsMC41ODIsMC4wNDhjMC4xNzQsMC4wMjgsMC41NjgsMC4yOTcsMC44ODQsMC41MTRjMC45MTYsMC42MjcsMi4xNjEsMS40OCw0LjA4NSwxLjQ4IGMwLjA0MiwwLDAuMDg0LTAuMDAxLDAuMTI1LTAuMDAyQzE1LjAzOSwyNi45OTksMTUuMDksMjcsMTUuMTQxLDI3YzEuOTE1LDAsMy4xNjEtMC44NDksNC4wNzEtMS40NjkgYzAuMzUxLTAuMjQsMC43MjgtMC40OTgsMC45MDUtMC41MjZjMC4xOTYtMC4wMzEsMC4zOTItMC4wNDcsMC41NzgtMC4wNDdjMC4zMTksMCwwLjU2OSwwLjAzNSwwLjg2OSwwLjA5MiBjMC4zMywwLjA2MiwwLjU5NSwwLjA5MSwwLjgzNSwwLjA5MWMxLjA2MiwwLDEuOTI2LTAuNjM1LDIuMjMxLTEuNjE4YzEuNDE5LTAuMzA4LDIuNjYxLTAuODM3LDMuMTctMS45OTIgYzAuMTE3LTAuMjcxLDAuMTgxLTAuNTM3LDAuMTk4LTAuODA4YzAuMDY1LTEuMTU2LTAuNzM5LTIuMTU0LTEuODY5LTIuMzM4Yy0xLjMyMS0wLjIxMS0yLjIyNi0xLjE4Ny0yLjcxNi0xLjg4NyBjMC4wMTUtMC4wMDUsMC4wMjktMC4wMTEsMC4wNDItMC4wMTZjMi4wMDQtMC43NjcsMi4yODMtMi4wNTMsMi4yNzEtMi43NTFjLTAuMDIyLTEuMDY5LTAuNzQzLTIuMDAyLTEuODQyLTIuMzk2IGMtMC4yNzgtMC4xMTItMC42MjQtMC4xODMtMC45NzUtMC4xOTVjMC4wMzMtMS4yNzItMC4wNDctMi42MDEtMC41MjYtMy42NDNDMjAuNDYxLDMuMzI1LDE2LjQxNSwzLDE1LjIyLDNMMTUuMjIsM3oiPjwvcGF0aD48L3N2Zz4="/>  </i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"> <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTTE1LDNDOC4zNzMsMywzLDguMzczLDMsMTVjMCw1LjYyMywzLjg3MiwxMC4zMjgsOS4wOTIsMTEuNjNDMTIuMDM2LDI2LjQ2OCwxMiwyNi4yOCwxMiwyNi4wNDd2LTIuMDUxIGMtMC40ODcsMC0xLjMwMywwLTEuNTA4LDBjLTAuODIxLDAtMS41NTEtMC4zNTMtMS45MDUtMS4wMDljLTAuMzkzLTAuNzI5LTAuNDYxLTEuODQ0LTEuNDM1LTIuNTI2IGMtMC4yODktMC4yMjctMC4wNjktMC40ODYsMC4yNjQtMC40NTFjMC42MTUsMC4xNzQsMS4xMjUsMC41OTYsMS42MDUsMS4yMjJjMC40NzgsMC42MjcsMC43MDMsMC43NjksMS41OTYsMC43NjkgYzAuNDMzLDAsMS4wODEtMC4wMjUsMS42OTEtMC4xMjFjMC4zMjgtMC44MzMsMC44OTUtMS42LDEuNTg4LTEuOTYyYy0zLjk5Ni0wLjQxMS01LjkwMy0yLjM5OS01LjkwMy01LjA5OCBjMC0xLjE2MiwwLjQ5NS0yLjI4NiwxLjMzNi0zLjIzM0M5LjA1MywxMC42NDcsOC43MDYsOC43Myw5LjQzNSw4YzEuNzk4LDAsMi44ODUsMS4xNjYsMy4xNDYsMS40ODFDMTMuNDc3LDkuMTc0LDE0LjQ2MSw5LDE1LjQ5NSw5IGMxLjAzNiwwLDIuMDI0LDAuMTc0LDIuOTIyLDAuNDgzQzE4LjY3NSw5LjE3LDE5Ljc2Myw4LDIxLjU2NSw4YzAuNzMyLDAuNzMxLDAuMzgxLDIuNjU2LDAuMTAyLDMuNTk0IGMwLjgzNiwwLjk0NSwxLjMyOCwyLjA2NiwxLjMyOCwzLjIyNmMwLDIuNjk3LTEuOTA0LDQuNjg0LTUuODk0LDUuMDk3QzE4LjE5OSwyMC40OSwxOSwyMi4xLDE5LDIzLjMxM3YyLjczNCBjMCwwLjEwNC0wLjAyMywwLjE3OS0wLjAzNSwwLjI2OEMyMy42NDEsMjQuNjc2LDI3LDIwLjIzNiwyNywxNUMyNyw4LjM3MywyMS42MjcsMywxNSwzeiI+PC9wYXRoPjwvc3ZnPg=="/>  </i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
      
    </>
  )
}

