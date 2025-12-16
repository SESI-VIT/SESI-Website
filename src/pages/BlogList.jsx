import React from 'react';
import { articles } from '../component/Blogs/data/articlesData'; // Import data
import '../styles/Blogs.css'; // Import CSS for styling
// Helper Component for the list below the main grid
const SimpleArticleCard = ({ article }) => (
    // Uses standard anchor tag to link externally
    <a href={article.linkUrl} target="_blank" rel="noopener noreferrer" className="simple-card">
        
        {/* 💡 Image Container: Uses 35% of the card's width */}
        <div className="simple-card-image-container">
            {/* The image URL will pull from article.imageUrl once you update articlesData.js */}
            <img 
                src={article.imageUrl || '/images/blog-placeholder.jpg'} 
                alt={article.title} 
                className="simple-card-image"
                // Placeholder image for development if image path is broken or missing
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x120/B8860B/000?text=Solar'; }}
            />
        </div>

        {/* 💡 Text Content Container: Uses 65% of the card's width */}
        <div className="simple-card-content">
            <div className="simple-card-meta">
                <span className="category-tag">{article.category}</span>
                <span> | {article.date}</span>
            </div>
            <h4>{article.title}</h4>
            {/* Excerpt text has been removed in the CSS to save vertical space */}
        </div>
        
    </a>
);


const BlogList = () => {
    // Manually assign the first 3 articles to the main asymmetrical grid slots
    const largeFeature = articles[0] || {}; 
    const topRightArticle = articles[1] || {}; // Article 2 (Harnessing the Power of Two)
    const middleRightArticle = articles[2] || {}; // Article 3 (Revolutionizing Renewable Energy)
    
    // The remaining articles (4, 5, 6, etc.) go into the overflow list
    const overflowArticles = articles.slice(3);
    
    // Main external blog link
    const MAIN_BLOG_LINK = 'https://sesivit.wordpress.com/solar-blogs/';

    // Helper component for the Large Feature Card image and content
    const LargeFeatureImageCard = ({ article }) => (
        <a 
            href={article.linkUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="blog-card feature-card-lg"
            // EDITED: Added color: 'var(--dark-text)' to force the text color to black.
            style={{ textDecoration: 'none', color: 'var(--dark-text)' }} 
        >
            <div className="image-container">
                {/* Image tag for the Large Card */}
                <img 
                    src={article.imageUrl || 'https://placehold.co/1200x450/CDA42A/333?text=Featured+Image'} 
                    alt={article.title} 
                    className="card-image-content"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x450/CDA42A/333?text=Featured+Image'; }}
                />
                <div className="content-footer">
                    <div className="meta-info">
                        <span className="tag-item">{article.category}</span>
                        <span className="date-item">{article.date}</span>
                    </div>
                    <h2>{article.title}</h2>
                    <p className="excerpt">{article.excerpt}</p>
                </div>
            </div>
        </a>
    );

    // Helper component for the Middle Right Card (Image Small) - NO LONGER USED, but kept for reference
    // eslint-disable-next-line no-unused-vars
    const SmallImageCard = ({ article }) => (
        // Added inline style to ensure the link has no underline
        <a 
            href={article.linkUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="blog-card card-image-small"
            style={{ textDecoration: 'none' }} 
        >
            <div className="card-image-small-content">
                 {/* Image tag for the Small Card */}
                <img 
                    src={article.imageUrl || 'https://placehold.co/400x250/B8860B/000?text=Small+Image'} 
                    alt={article.title} 
                    className="card-image-content"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/B8860B/000?text=Small+Image'; }}
                />
                <div className="content-footer-small">
                    <div className="meta-info">
                        <span className="tag-item">{article.category}</span>
                        <span className="date-item">{article.date}</span>
                    </div>
                    <h4>{article.title}</h4>
                </div>
            </div>
        </a>
    );


    return (
        <div className="blog-page-container">
            {/* --- HEADER --- */}
            <div className="blog-header">
                <h1>The Solar Log</h1>
                <a 
                    href={MAIN_BLOG_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="read-blog-button"
                >
                    Read All Blogs
                </a>
            </div>

            {/* --- ASYMMETRICAL GRID --- */}
            <div className="blog-grid">

                {/* 1. LARGE FEATURE CARD (LEFT) */}
                <LargeFeatureImageCard article={largeFeature} />

                {/* EDITED: All inline flex/margin styles removed. Now relying purely on the new CSS Grid in App.css */}
                <div className="stacked-content">

                    {/* 2. TOP RIGHT BLOCK: TEXT/CONTENT BLOCK (Article 2 is text-only) */}
                    <a 
                        href={topRightArticle.linkUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="blog-card card-block-colored block-1" 
                    >
                        <h3>{topRightArticle.title}</h3>
                        <p className="excerpt">
                            {topRightArticle.excerpt.split(' ').slice(0, 25).join(' ') + '...'}
                        </p>
                        <span className="block-link">
                            <span className="category-tag">{topRightArticle.category}</span> | {topRightArticle.date} &rarr;
                        </span>
                    </a>

                    {/* 3. MIDDLE RIGHT BLOCK: TEXT/CONTENT BLOCK (Article 3 is now text-only) */}
                    <a 
                        href={middleRightArticle.linkUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="blog-card card-block-colored block-1" 
                    >
                        <h3>{middleRightArticle.title}</h3>
                        <p className="excerpt">
                            {middleRightArticle.excerpt.split(' ').slice(0, 25).join(' ') + '...'}
                        </p>
                        <span className="block-link">
                            <span className="category-tag">{middleRightArticle.category}</span> | {middleRightArticle.date} &rarr;
                        </span>
                    </a>

                    {/* 4. BOTTOM RIGHT BLOCK: PROVERB/QUOTE BLOCK (FIXED MARKDOWN SYNTAX) */}
                    <div 
                        className="blog-card card-block-colored card-tags" 
                    >
                        <p style={{fontSize: '1.2rem', color: 'var(--dark-text)', fontWeight: 700}}>
                            Solar Proverb
                        </p>
                        {/* FIX: Removed Markdown asterisks and used `<strong>` for bolding */}
                        <p style={{fontSize: '1.1rem', color: 'var(--dark-text)', marginTop: '20px', lineHeight: '1.4'}}>
                            <strong>"Harvest the sun today, and let your wallet rest forever."</strong>
                        </p>
                        <p style={{fontSize: '0.8rem', color: 'var(--secondary-color)', marginTop: '15px'}}>
                            — Inspired by SESI-VIT principles
                        </p>
                    </div>

                </div> {/* End of stacked-content */}

            </div> {/* End of blog-grid */}

            {/* --- OVERFLOW SECTION (Remaining articles) --- */}
            {overflowArticles.length > 0 && (
                <div className="overflow-list-container">
                    <h2>More Articles</h2>
                    <div className="overflow-list-grid">
                        {overflowArticles.map(article => (
                            <SimpleArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogList;