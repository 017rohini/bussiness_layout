import React from 'react';
import contact from '../images/home/contact.jpg';
import person1 from '../images/team/person1.jpg';
import person2 from '../images/team/person2.jpg';
import person3 from '../images/team/person3.jpg';

 const Contact = ()=> {
     return(
        <>
            <section id="team" class="bg-grey team section-padding">
                <header class="section-header">
                    <h4>Who we are</h4>
                    <h2>Our Professional Team</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem vitae voluptatibus officiis incidunt quidem necessitatibus illum ea? Officia cumque, nobis explicabo vel ad recusandae perferendis eveniet, aliquam harum culpa corporis?
                    </p>
                </header>
                <div class="flex-items">
                    <div>
                        <img src={person1} alt="person1"/>
                        <h4>John Steel</h4>
                        <p>Precident</p>
                    </div>
                    <div>
                        <img src={person2} alt="person2"/>
                        <h4>Kavita Shah</h4>
                        <p>Vice-precident</p>
                    </div>
                    <div>
                        <img src={person3} alt="person3"/>
                        <h4>Rugved Karunkar</h4>
                        <p>Marketing head</p>
                    </div>
                </div>
            </section>
            <section id="contact" class="contact flex-columns">
                <div class="row">
                    <div class="column">
                        <div class="column-1">
                            <img src={contact} alt="contact"/>
                        </div>
                    </div>
                    <div class="column">
                        <div class="column-2 bg-light">
                            <h2>Request Callback</h2>
                            <form action="" class="callback-form">
                                <div class="form-control">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" id="name" placeholder="Enter name"/>
                                </div>
                                <div class="form-control">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Enter email"/>
                                </div>
                                <div class="form-control">
                                    <label for="phone">Phone</label>
                                    <input type="text" name="phone" id="phone" placeholder="Enter phone"/>
                                </div>
                                <input type="submit" value="Send" class="btn"/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
     )
 }

 export default Contact;