import './landing.css';

export default function PrivacyPolicy() {
    return (
      <div className="page">
        <main className="main">
          <h1 className="title">Privacy Policy</h1>
          
          <section className="policy-container">
            
            <div className="policy-section">
            <h3>1. Information Collection</h3>
            <p>
              Our automated bot system employs sophisticated web scraping technologies to gather and process product information exclusively from Amazon's publicly accessible bestseller pages. This collection process is designed to operate 24/7, continuously monitoring price changes, discount variations, and product availability across multiple categories on Amazon's platform. The bot specifically focuses on collecting data points including, but not limited to, product names, descriptions, current pricing, historical price data, discount percentages, product categories, subcategories, seller information, shipping details, and customer ratings. This information is processed through our proprietary algorithms to identify the most significant discounts and promotional offers available to consumers.
            </p>
            <p>
              In addition to product-specific data, our system maintains temporary logs of user interactions to improve service quality and recommendation accuracy. These logs may include anonymized data such as search patterns, category preferences, and interaction timestamps. It's important to note that we do not collect, store, or process any personally identifiable information (PII) from our users. Our bot operates on a strictly product-focused basis, ensuring user privacy while delivering valuable discount information. All data collection processes comply with Amazon's terms of service and relevant data protection regulations.
            </p>

            <h3>2. Data Usage</h3>
            <p>
              The collected product information undergoes a comprehensive analysis process through our sophisticated data processing pipeline. Our primary objective is to identify genuine discounts and promotional offers that provide substantial value to our users. This involves historical price analysis, discount verification, and trend analysis to ensure the accuracy and reliability of our recommendations. The processed data is used to generate personalized product recommendations based on category preferences and search patterns, without requiring any personal user information.
            </p>
            <p>
              Furthermore, we utilize aggregated usage statistics to improve our bot's performance, enhance the accuracy of our discount detection algorithms, and optimize the timing of our product updates. This includes analyzing peak shopping periods, discount patterns, and category-specific trends to provide more relevant and timely recommendations to our users. All data processing activities are conducted with strict adherence to data minimization principles, ensuring that we only process information that is directly relevant to providing our discount discovery service.
            </p>

            <h3>3. Affiliate Disclosure</h3>
            <p>
              Our service operates under the Amazon Associates Program, which means we earn referral fees when users make purchases through our affiliate links. This commercial relationship with Amazon is fundamental to our business model and allows us to provide our discount discovery service free of charge to users. When users click on product links provided by our bot, they are directed to Amazon's platform through our unique affiliate tracking links. These links include special tracking codes that allow Amazon to attribute the subsequent purchases to our referral service.
            </p>
            <p>
              The commission rates vary depending on product categories and special promotional periods set by Amazon. It's important to understand that these affiliate commissions do not affect the final price paid by the user – you will always pay the same price whether you use our affiliate links or visit Amazon directly. Our bot is designed to prioritize showing the best available discounts based solely on price reductions and value for money, regardless of the commission rates we might earn. We maintain complete transparency about our affiliate relationship with Amazon and are committed to providing unbiased discount information to our users.
            </p>

              <h3>4. Amazon Data Usage</h3>
<p>
  Our automated data collection system interfaces with Amazon's publicly accessible pages to gather product information through ethical web scraping practices. This process involves systematic collection of product details from Amazon's bestseller lists, deal pages, and category-specific sections. The collected data includes product titles, descriptions, prices, discounts, availability status, ratings, and review counts. We maintain strict compliance with Amazon's robots.txt directives and implement appropriate rate limiting to ensure our data collection practices don't impact Amazon's server performance.
</p>
<p>
  All product information displayed through our bot is sourced directly from Amazon and is refreshed regularly to maintain accuracy. We acknowledge that all product data, images, and related content remain the intellectual property of Amazon.com and their respective sellers. Our service acts as an intermediary, processing and presenting this information in a format optimized for discount discovery, while maintaining the integrity and attribution of the original data source.
</p>

<h3>5. Third-Party Links</h3>
<p>
  Our bot exclusively generates links that redirect to Amazon.com's platform. When users interact with these links, they are transported to Amazon's secure environment where all transactions take place. We want to emphasize that we have no control over or responsibility for the content, privacy policies, or practices of Amazon's website. Users should be aware that upon clicking our affiliate links, their interactions fall under Amazon's privacy policy and terms of service. We encourage users to familiarize themselves with Amazon's privacy policy and terms of service to understand how their information is handled during and after transactions.
</p>
<p>
  While we carefully verify our affiliate links to ensure they direct to legitimate Amazon product pages, users should always exercise due diligence when making online purchases. Our bot implements secure link generation practices and regularly monitors all outbound links for accuracy and security.
</p>

<h3>6. User Rights</h3>
<p>
  While our bot doesn't collect personal information, we respect and support users' rights to privacy and data protection. Users have the right to transparent information about how our bot operates and processes product data. We maintain a commitment to clear communication about our data practices and affiliate relationships. Users can opt out of using our service at any time, and since we don't collect personal data, there's no need for data deletion requests or account management.
</p>
<p>
  For users concerned about tracking through affiliate links, we provide full transparency about how these links work and what information is passed to Amazon through them. Users always have the choice to visit Amazon directly instead of using our affiliate links, though this doesn't affect the product prices or their shopping experience.
</p>

<h3>7. Changes to Privacy Policy</h3>
<p>
  This privacy policy may be updated periodically to reflect changes in our practices, technological advancements, or regulatory requirements. We reserve the right to modify this policy at any time, and such changes will be effective immediately upon posting. Users will be notified of significant changes through our bot's announcement system or website notifications. Continued use of our service after any modifications to this policy constitutes acceptance of the updated terms.
</p>
<p>
  We maintain an archive of previous privacy policy versions and track all significant changes. Users can request access to previous versions of our privacy policy for reference. We encourage users to periodically review this policy to stay informed about how we protect and manage the information we collect.
</p>

<h3>8. Contact Information</h3>
<p>
  For any questions, concerns, or feedback regarding this privacy policy or our bot's operation, please contact our support team. We are committed to addressing your privacy concerns and providing clear, timely responses to your inquiries. You can reach us through the following channels:
</p>
<ul>
  <li>Email: shoppingsmartbot@outlook.com</li>
  <li>Business Hours: Monday to Friday, 9 AM to 5 PM UTC+5:30</li>
</ul>
<p>
  For urgent matters related to privacy concerns or data usage, please include "Privacy Policy Query" in your subject line for priority handling. We strive to respond to all inquiries within 48 business hours.
</p>
</div>
            
          </section>
          <br></br>
          <br></br>
          <h2 className="update-date">Last Updated: {new Date().toLocaleDateString()}</h2>

        </main>
      </div>
    )
  }