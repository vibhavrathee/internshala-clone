import React from 'react'
import {Link} from 'react-router-dom'
import './cards.css'
export default function Categories() {
    return (
        <div>
            <div className="cards">
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/part_time.svg"/></div>
                    <div className="text">Part Time</div>
                </div>
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/engineering.svg"/>
                    </div>
                    <div className="text">Engineering</div>
                </div>
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/ngo.svg"/>
                    </div>
                    <div className="text">NGO</div>
                </div>
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/mba.svg"/>
                    </div>
                    <div className="text">MBA</div>
                </div>
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/design.svg"/>
                    </div>
                    <div className="text">Design</div>
                </div>
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/science.svg"/>
                    </div>
                    <div className="text">Science</div>
                </div>
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/media.svg"/>
                    </div>
                    <div className="text">Media</div>
                </div>
                <div className="card_item">
                    <div className="img">
                        <img alt="" src="https://internshala.com/static/images/home/internships/categories/humanities.svg"/>
                    </div>
                    <div className="text">Humanites</div>
                </div>
            </div>
        </div>
    )
}
