
SELECT * FROM "ProductBrand";
SELECT * FROM "ProductCategory";
SELECT * FROM "Country";
SELECT * FROM "Currency";
SELECT * FROM "User";
SELECT * FROM "Product";

-- INSERT INTO "ProductReview"
-- ("Rating", "Review", "Note", "IsVerified", "UserID", "ProductID") VALUES 
-- (4.5, 		'greats', '', 		TRUE, '9cfa4ccd-e7e4-4bb6-9bfc-4b36200781e7', '03f20702-f6f4-4130-9fae-4a310242f86f'),
-- (5.0, 		'ok', 	 '', 		TRUE, '9cfa4ccd-e7e4-4bb6-9bfc-4b36200781e7', '03f20702-f6f4-4130-9fae-4a310242f86f'),
-- (4.5, 		'good',  '', 		TRUE, 'b0ca177a-1b4f-4de9-bea9-906bb05aa440', '04f72fb1-0d2c-4ba4-96d0-911e1798548b')
-- ;
	
Admin123@
INSERT INTO "User"
("Name", "Username", "Password", "Email", "MobileNo", "CountryID", "CurrencyID", "Role") VALUES 
('Test1 User', 'testuser1', '$2a$10$r34q/ymlOBqAfkd2Ax.hpu1HUX6gw1Dfb3shvzWN1.LR/awtbuBbe', 'test1@email.com', '123', '733a46d5-599b-4d0b-8a39-cf4afb565637', '4f62de6c-3c71-4d3c-8aee-37f8a1db619c', 'CUSTOMER'),
('Test2 User', 'testuser2', '$2a$10$r34q/ymlOBqAfkd2Ax.hpu1HUX6gw1Dfb3shvzWN1.LR/awtbuBbe', 'test2@email.com', '1234', '733a46d5-599b-4d0b-8a39-cf4afb565637', '4f62de6c-3c71-4d3c-8aee-37f8a1db619c', 'CUSTOMER'),
('Administrator', 'admin', '$2a$10$r34q/ymlOBqAfkd2Ax.hpu1HUX6gw1Dfb3shvzWN1.LR/awtbuBbe', 'admin@email.com', '12345', '733a46d5-599b-4d0b-8a39-cf4afb565637', '4f62de6c-3c71-4d3c-8aee-37f8a1db619c', 'ADMIN')
;

SELECT * FROM "User";


-- INSERT INTO "Product"
-- ("Name", "Slug", "Description", "ImgUrls", "Detail", 
-- "NoOfStock", "Price", "DiscountAmount", "DiscountIsPercentage", "IsFeatured", "BannerImg", 
-- "ProductCategoryID", "ProductBrandID", "CountryID", "CurrencyID") VALUES 
-- ('Polo Sporting Stretch Shirt', 'polo-sporting-stretch-shirt', 
-- 'Classic Polo style with modern comfort', 
-- ARRAY['/img/products/p1-1.jpg', '/img/products/p1-2.jpg'], '[]', 
-- 10, 59.99, 0, 0, FALSE, '/banners/polo.jpg', 
-- '913a1043-d35b-4c70-87f5-bb0b06aee7eb', '8ad793be-0233-422e-ad18-7b8563594a94', 
-- '733a46d5-599b-4d0b-8a39-cf4afb565637', '4f62de6c-3c71-4d3c-8aee-37f8a1db619c')

-- ('Brooks Brothers Long Sleeved Shirt', 'brooks-brothers-long-sleeved-shirt', 
-- 'Timeless style and premium comfort', 
-- ARRAY['/img/products/p2-1.jpg', '/img/products/p2-2.jpg'], '[]', 
-- 15, 85.90, 0, 0, FALSE, '/img/banners/banner-2.jpg', 
-- '913a1043-d35b-4c70-87f5-bb0b06aee7eb', '8ad793be-0233-422e-ad18-7b8563594a94', 
-- '733a46d5-599b-4d0b-8a39-cf4afb565637', '4f62de6c-3c71-4d3c-8aee-37f8a1db619c'),

-- ('Tommy Hilfiger Classic Fit Dress Shirt', 'tommy-hilfiger-classic-fit-dress-shirt', 
-- 'A perfect blend of sophistication and comfort', 
-- ARRAY['/img/products/p3-1.jpg', '/img/products/p3-2.jpg'], '[]', 
-- 0, 169.99, 0, 0, FALSE, '', 
-- '913a1043-d35b-4c70-87f5-bb0b06aee7eb', '8ad793be-0233-422e-ad18-7b8563594a94', 
-- '733a46d5-599b-4d0b-8a39-cf4afb565637', '4f62de6c-3c71-4d3c-8aee-37f8a1db619c'),

-- ('Calvin Klein Slim Fit Stretch Shirt', 'calvin-klein-slim-fit-stretch-shirt', 
-- 'Streamlined design with flexible stretch fabric', 
-- ARRAY['/img/products/p4-1.jpg', '/img/products/p4-2.jpg'], '[]', 
-- 10, 59.99, 0, 0, FALSE, '', 
-- '913a1043-d35b-4c70-87f5-bb0b06aee7eb', '8ad793be-0233-422e-ad18-7b8563594a94', 
-- '733a46d5-599b-4d0b-8a39-cf4afb565637', '4f62de6c-3c71-4d3c-8aee-37f8a1db619c'),

-- ('Polo Ralph Lauren Oxford Shirt', 'polo-ralph-lauren-oxford-shirt',
-- 'Iconic Polo design with refined oxford fabric', 
-- ARRAY['/img/products/p5-1.jpg', '/img/products/p5-2.jpg'], '[]', 
-- 9, 79.99, 0, 0, FALSE, '', 
-- '913a1043-d35b-4c70-87f5-bb0b06aee7eb', '8ad793be-0233-422e-ad18-7b8563594a94', 
-- '733a46d5-599b-4d0b-8a39-cf4afb565637', '4f62de6c-3c71-4d3c-8aee-37f8a1db619c'),

-- ('Polo Classic Pink Hoodie', 'polo-classic-pink-hoodie', 
-- 'Soft, stylish, and perfect for laid-back days', 
-- ARRAY['/img/products/p6-1.jpg', '/img/products/p6-2.jpg'], '[]', 
-- 10, 59.99, 0, 0, FALSE, '', 
-- '913a1043-d35b-4c70-87f5-bb0b06aee7eb', '8ad793be-0233-422e-ad18-7b8563594a94', 
-- '733a46d5-599b-4d0b-8a39-cf4afb565637', '4f62de6c-3c71-4d3c-8aee-37f8a1db619c')
-- ;


-- INSERT INTO "ProductCategory"
-- ("Name") VALUES 
-- ('Men Fashion'),
-- ('Girl Fashion'),
-- ('Electronics'),
-- ('Computers')
-- ;

-- INSERT INTO "ProductBrand"
-- ("Name")	VALUES 
-- ('Polo'),
-- ('Nike'),
-- ('M&H'),
-- ('Zara'),
-- ('Adidas'),
-- ('Dior')
-- ;

-- INSERT INTO "Currency"
-- ( "Name", "Symbol", "Code", "conversionRate")	VALUES 
-- ('US Dollar', '$', 'USD', 1);
	

-- INSERT INTO "Country"
-- (		"Name", 		"IsoCode") VALUES
-- ( 'United Arab Emirates', 'AE'),
-- ( 			   'India',  'IN'),
-- ( 	 		'Pakistan',  'PK'),
-- ( 	 	  'Bangladesh',  'BD'),
-- ( 	 	 'Philippines',  'PH'),
-- ( 	  			'Iran',	 'IR'),
-- ( 	 	 	   'Egypt',  'EG'),
-- (	 		   'Nepal',  'NP'),
-- (	  	   'Sri Lanka',	 'LK'),
-- ( 	  		   'China',	 'CN'),
-- (  	     'Afghanistan',	 'AF'),
-- ( 	         'Bahrain',	 'BH'),
-- ( 	          'Bhutan',	 'BT'),
-- ( 	         'Myanmar',  'MM'),
-- ( 	  		  'Canada',  'CA'),
-- ( 	   		 'Denmark',  'DK'),
-- ( 	  'United Kingdom',	 'DK'),
-- ( 	         'Estonia',  'EE'),
-- ( 	  		'Ethiopia',  'ET'),
-- ( 	  		  'France',  'FR'),
-- ( 	  		 'Georgia',  'GE'),
-- ( 	  		 'Germany',  'DE'),
-- ( 	  	 	   'Ghana',	 'GH'),
-- ( 	  		  'Greece',	 'GR'),
-- ( 	  	   'Hong Kong',  'HK'),
-- ( 	  	   'Indonesia',  'ID'),
-- ( 	  		    'Iraq',  'IQ'),
-- (	  		 'Ireland',	 'IE'),
-- (	  		  'Israel',  'IL'),
-- (	  		   'Italy',  'IT'),
-- (	  		   'Japan',	 'JP'),
-- (	  		  'Jordan',  'JO'),
-- (	  	  'Kazakhstan',  'KZ'),
-- (	  		   'Kenya',	 'KE'),
-- (	  		  'Kuwait',  'KW'),
-- (	   	  'Kyrgyzstan',  'KG'),
-- (	  		 'Lebanon',  'LB'),
-- (	  		   'Libya',	 'LY'),
-- (	  	  'Luxembourg',	 'LU'),
-- (	  		'Malaysia',	 'MY'),
-- (	  		'Maldives',	 'MV'),
-- (	  		    'Mali',	 'ML'),
-- (	  		   'Malta',	 'MT'),
-- (	  		  'Mexico',  'MX'),
-- (	  		 'Morocco',	 'MA'),
-- (	  	 'Netherlands',  'NL'),
-- (	  	 'New Zealand',	 'NZ'),
-- (	  		 'Nigeria',	 'NG'),
-- (	  		  'Norway',	 'NO'),
-- (	  		    'Oman',  'OM'),
-- (	  		  'Poland',	 'PL'),
-- (	  		'Portugal',	 'PT'),
-- (	  		   'Qatar',	 'QA'),
-- (	  		 'Romania',	 'RO'),
-- (	 		'Scotland',	'GBR'),
-- (	  		  'Serbia',  'RS'),
-- (	  	   'Singapore',	 'SG'),
-- (	  		'Slovakia',	 'SK'),
-- (	  		'Slovenia',  'SL'),
-- (	  		 'Somalia',  'SO'),
-- (	  	'South Africa',  'ZA'),
-- (	  	 'South Korea',  'KR'),
-- (	  		   'Spain',  'ES'),
-- (	  		   'Sudan',  'SD'),
-- (	  	    'Eswatini',	 'SZ'),
-- (	  		  'Sweden',  'SE'),
-- (	  	 'Switzerland',  'CH'),
-- (	  		   'Syria',  'SY'),
-- (	  	  'Tajikistan',	 'TJ'),
-- (	  		'Tanzania',  'TZ'),
-- (	  		'Thailand',  'TH'),
-- (	  		 'Tunisia',  'TN'),
-- (	  		  'Turkey',	 'TR'),
-- (	  		  'Uganda',	 'UG'),
-- (	  		 'Ukraine',  'UA'),
-- (	 		 'Uruguay',	 'UY'),
-- (	   'United States',	 'US'),
-- (	  	  'Uzbekistan',  'UZ'),
-- (	  	'Vatican City',  'VA'),
-- (	  	   'Venezuela',  'VE'),
-- (	  		 'Vietnam',  'VN'),
-- (	  		   'Yemen',  'YE'),
-- (	  		'Zimbabwe',  'ZW'),
-- (	  	  'Montenegro',  'ME'),
-- (	  		  'Russia',	 'RU'),
-- (	  	'Saudi Arabia',  'SA')
-- ;

