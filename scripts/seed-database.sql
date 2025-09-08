-- Create sample users
INSERT INTO users (id, email, name, avatar, bio, created_at, updated_at) VALUES
('user_1', 'erika@stablo.com', 'Erika Oliver', '/placeholder.svg?height=40&width=40', 'Lifestyle and wellness writer passionate about women''s empowerment and personal growth.', NOW(), NOW()),
('user_2', 'joshua@stablo.com', 'Joshua Wood', '/placeholder.svg?height=40&width=40', 'Travel enthusiast and storyteller exploring the world one village at a time.', NOW(), NOW()),
('user_3', 'mario@stablo.com', 'Mario Sanchez', '/placeholder.svg?height=40&width=40', 'Personal development coach and mindfulness advocate helping people live their best lives.', NOW(), NOW());

-- Create categories
INSERT INTO categories (id, name, slug, description, color, created_at, updated_at) VALUES
('cat_lifestyle', 'Lifestyle', 'lifestyle', 'Wellness, relationships, and living your best life', '#8b5cf6', NOW(), NOW()),
('cat_technology', 'Technology', 'technology', 'Latest trends, reviews, and tech insights', '#3b82f6', NOW(), NOW()),
('cat_travel', 'Travel', 'travel', 'Adventures, destinations, and travel tips', '#f97316', NOW(), NOW()),
('cat_personal_growth', 'Personal Growth', 'personal-growth', 'Self-improvement, mindfulness, and development', '#10b981', NOW(), NOW());

-- Create sample posts
INSERT INTO posts (id, title, slug, excerpt, content, image, published, featured, read_time, author_id, category_id, published_at, created_at, updated_at) VALUES
('post_1', 'There''s Nothing New About Undermining Women''s Autonomy', 'undermining-womens-autonomy', 'Exploring the historical patterns and modern manifestations of challenges to women''s independence and decision-making power.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sI3K9AhBcvkWZ9KWPnAOVvDfPttS16.png', true, true, 6, 'user_1', 'cat_lifestyle', NOW(), NOW(), NOW()),
('post_2', 'Lessons Of Happiness I learned from a Mountain Village', 'mountain-village-happiness', 'Discovering life''s simple pleasures and profound wisdom through the lens of rural mountain community living.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/placeholder.svg?height=400&width=600', true, true, 8, 'user_2', 'cat_travel', NOW(), NOW(), NOW()),
('post_3', 'Escape Fantasies of the Tech Billionaires', 'tech-billionaire-fantasies', 'An in-depth look at how technology leaders envision the future and their plans for humanity''s next chapter.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/placeholder.svg?height=400&width=600', true, true, 12, 'user_1', 'cat_technology', NOW(), NOW(), NOW()),
('post_4', '3 Meaningful Ways to Practice Self-Care as an Introvert', 'self-care-introvert', 'Practical strategies for introverts to nurture their mental health and well-being in a world designed for extroverts.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/placeholder.svg?height=400&width=600', true, false, 7, 'user_3', 'cat_personal_growth', NOW(), NOW(), NOW()),
('post_5', 'Every Next Level of Your Life Will Demand a Different You', 'next-level-different-you', 'Understanding how personal growth requires continuous adaptation and the courage to evolve beyond your comfort zone.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/placeholder.svg?height=400&width=600', true, false, 5, 'user_3', 'cat_personal_growth', NOW(), NOW(), NOW()),
('post_6', '10 Simple Practices That Will Help You Get 1% Better Every Day', 'simple-practices-better-daily', 'Small, actionable habits that compound over time to create significant positive changes in your life and productivity.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/placeholder.svg?height=400&width=600', true, false, 9, 'user_1', 'cat_personal_growth', NOW(), NOW(), NOW());

-- Create some tags
INSERT INTO tags (id, name, slug) VALUES
('tag_1', 'Women''s Rights', 'womens-rights'),
('tag_2', 'Travel', 'travel'),
('tag_3', 'Technology', 'technology'),
('tag_4', 'Self Care', 'self-care'),
('tag_5', 'Personal Development', 'personal-development'),
('tag_6', 'Mindfulness', 'mindfulness');

-- Associate posts with tags (many-to-many relationship)
INSERT INTO _PostToTag (A, B) VALUES
('post_1', 'tag_1'),
('post_2', 'tag_2'),
('post_3', 'tag_3'),
('post_4', 'tag_4'),
('post_4', 'tag_6'),
('post_5', 'tag_5'),
('post_6', 'tag_5'),
('post_6', 'tag_6');
