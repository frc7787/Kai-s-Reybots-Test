import React from "react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer id="contact">
            <p className="footerHeader">Interested in Funding Our Team?</p>
            <a href="#pricing">
               <button className="footerPricingButton">View Pricing</button> 
            </a>
            <div className="footerElements">
                <div className="footerElement1">
                    <p className="footerContactSubheader">Contact Us</p>
                    <Link href="mailto:evanmoll@sd61.bc.ca">
                        <p className="footerContactEmail">reybots7787@gmail.com</p>
                    </Link>
                </div>
                <div className="footerElement2">
                    <button className="socialButton">
                        <i class="fa-brands fa-instagram"></i>
                    </button>
                    <button className="socialButton">
                        <i class="fa-brands fa-twitter"></i>
                    </button>
                    <button className="socialButton">
                        <i class="fa-brands fa-youtube"></i>
                    </button>
                </div>
            </div>
        </footer>
    )
}