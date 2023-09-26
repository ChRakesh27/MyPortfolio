import './App.css';

function App() {
  return (
    <>
      <div id="header">
        <div className="container">
          <nav>
            {/* <label className="logo"><img src="images/logo.jpg"> </label> */}
            <ul id="sidemenu">
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
              <i className="fas" onclick="Menu('-200px')">X</i>
            </ul>
            <i className="fas" onclick="Menu('0')"> = </i>
          </nav>
          <div className="header-text">
            <h1>Hi, I'm
              <span className="highlighted-text">
                <div className="ball">R</div>
                <div className="ball">a</div>
                <div className="ball">k</div>
                <div className="ball">e</div>
                <div className="ball">s</div>
                <div className="ball">h</div>
              </span>
            </h1>
          </div>
          <br />
          <br />
          <span className="profile-role-tagline">
            Knack of building applications with front and back end
            operations.
          </span>
        </div>
      </div>
      {/* <!-- --------------------------- About Me--------------------------> */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              {/* <img src="images/pic.jpg"> */}
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>agsfdgjdsfkdhfasdjfjsadfhsdgfd dsgajfd fafa asd fjasdf dsj df</p>
              <div className="tab-titles">
                <p className="tab-links active-link" onclick="opentab('skills')">Skills</p>
                <p className="tab-links" onclick="opentab('experience')">Experience</p>
                <p className="tab-links" onclick="opentab('education')">Education</p>
              </div>
              <div className="tab-contents active-tab" id="skills">
                <ul>
                  <li><span>Programming Language</span><br />C, C++, JavaScript, Python ,Java</li>
                  <li><span> Web Technologies</span><br /> HTML, CSS, Angular, ReactJs</li>
                  <li><span>Databases</span><br /> MySQL, MongoDb</li>
                  <li><span>Web Development</span><br />Web app Debelopment</li>
                  <li><span>App Development</span><br />Building Android apps</li>
                  <li><span>Other tools</span><br /> Eclipse IDE, VS code</li>
                </ul>
              </div>
              <div className="tab-contents" id="experience">
                <ul>
                  <li><span> Fresher </span></li>

                </ul>
              </div>
              <div className="tab-contents" id="education">
                <ul>
                  <li><span>2024</span><br />Bachelor of Technology Computer Science & Engineering at St.Peter's
                    Engineering College</li>
                  <li><span>2020</span><br />Board of Intermediate (MPC) at Padam Sri Junior College</li>
                  <li><span>2018</span><br />Secondary School at Zilla Parishad High School</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            <div className="work">
              {/* <img src="images/clg_login.jpg"> */}
              <div className="layer">
                <h3>College Login page</h3>
                <p>Angular-nodeJs-Mysql</p>
                {/* <!-- <a href="#"></a> --> */}

              </div>
            </div>
            <div className="work">
              {/* <img src="images/cart.jpg"> */}
              <div className="layer">

                <h3>SuperMarket</h3>
                <p>ReactJs</p>

              </div>
            </div>
            <div className="work">
              {/* <img src="images/mogodb-login.jpg"> */}
              <div className="layer">

                <h3>Login Page</h3>
                <p>Angular-nodeJs-MongoDb</p>
              </div>
            </div>
          </div>
          <a href="#" className="btn">See more</a>
        </div>
      </div>
      {/* <!-- --------------------contact----------------------------- --> */}
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p>chipparakesh27@gmail.com</p>
              <p>+91 6303396201</p>
              <a href="images\Rakesh-resume.docx" className="btn btn2">Download CV</a>
            </div>
            <div className="contact-right">
              {/* <form>
                        <input type="text" name="Name" placeholder="Your Name" required>
                        <input type="email" name="Email" placeholder="Your Email" required>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" className="btn btn2">Submit</button>
                    </form> */}

            </div>
          </div>
        </div>
      </div>
      {/* <script>
        var tablinks = document.getElementsByClassclassNameName('tab-links');
        var tabcontents = document.getElementsByClassclassNameName('tab-contents');

        opentab = (tabname) => {
            for (tablink of tablinks) {
                tablink.classNameList.remove('active-link')
            }
            for (tabcontent of tabcontents) {
                tabcontent.classNameList.remove('active-tab')
            }
            event.currentTarget.classNameList.add("active-link");
            document.getElementById(tabname).classNameList.add('active-tab')
        }
        var sidemenu = document.getElementById('sidemenu');

        function Menu(par) {
            sidemenu.style.right = par;
        }

    </script> */}
    </>
  );
}

export default App;
