import React from 'react'
import {Link} from 'react-router-dom'
import './cards.css'
export default function Cards() {
    return (
        <div>
            <div className="cards">
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/work_from_home.svg"/></div>
                    <div className="text">Work from home</div>
                </div>
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/delhi_ncr.svg"/>
                    </div>
                    <div className="text">Delhi/NCR</div>
                </div>
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/bangalore.svg"/>
                    </div>
                    <div className="text">Bangalore</div>
                </div>
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/mumbai.svg"/>
                    </div>
                    <div className="text">Mumbai</div>
                </div>
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/hyderabad.svg"/>
                    </div>
                    <div className="text">Hyderabad</div>
                </div>
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/chennai.svg"/>
                    </div>
                    <div className="text">Chennai</div>
                </div>
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/kolkata.svg"/>
                    </div>
                    <div className="text">Kolkata</div>
                </div>
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/international.svg"/>
                    </div>
                    <div className="text">International</div>
                </div>
            </div>
        </div>
    )
}
