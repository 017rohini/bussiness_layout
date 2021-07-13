import React from 'react';
import people from '../images/home/people.jpg';
import case1 from '../images/cases/cases1.jpg';
import case2 from '../images/cases/cases2.jpg';
import case3 from '../images/cases/cases3.jpg';
import case4 from '../images/cases/cases4.jpg';
import case5 from '../images/cases/cases5.jpg';
import case6 from '../images/cases/cases6.jpg';
import case7 from '../images/cases/cases7.jpg';
import case8 from '../images/cases/cases8.jpg';


 const About = ()=> {
     return(
        <section id="about" class="solutions flex-columns">
            <div class="row">
                <div class="column">
                    <div class="column-1">
                        <img src={people} alt="people"/>
                    </div>
                </div>
                <div class="column">
                    <div class="column-2 bg-primary">
                        <h4>What you are looking for</h4>
                        <h2>We Provide Bespoke Solutions</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex id animi quis facilis odio, perspiciatis quas et est a commodi eaque soluta maiores adipisci dolore, quibusdam recusandae nisi autem.</p>
                        <a href="index.html" class="btn btn-outline">
                            <i class="fas fa-chevron-right"></i>
                            Read More
                        </a>
                    </div>
                </div>
            </div>
            <section id="cases" class="cases flex-grid section-padding">
                <header class="section-header">
                    <h4>This is what we do</h4>
                    <h2>Bussiness Cases</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem vitae voluptatibus officiis incidunt quidem necessitatibus illum ea? Officia cumque, nobis explicabo vel ad recusandae perferendis eveniet, aliquam harum culpa corporis?
                    </p>
                </header>
                <div class="row">
                    <div class="column">
                        <img src={case1} alt="case1"/>
                        <img src={case2} alt="case2"/>
                    </div>
                    <div class="column">
                        <img src={case3} alt="case3"/>
                        <img src={case4} alt="case4"/>
                    </div>
                    <div class="column">
                        <img src={case5} alt="case5"/>
                        <img src={case6} alt="case6"/>
                    </div>
                    <div class="column">
                        <img src={case7} alt="case7"/>
                        <img src={case8} alt="case8"/>
                    </div>
                </div>
            </section>
        </section>
     )
 }

 export default About;