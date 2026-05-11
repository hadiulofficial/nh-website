-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 10, 2026 at 03:03 PM
-- Server version: 10.11.15-MariaDB
-- PHP Version: 8.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `softulas_nh`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `date_of_birth` date NOT NULL,
  `preferred_universities` varchar(255) NOT NULL,
  `passport_number` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `first_name`, `last_name`, `email`, `phone`, `gender`, `date_of_birth`, `preferred_universities`, `passport_number`, `nationality`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Eafi', 'fgf', 'fgfh@hjh.com', '7675', 'male', '2025-08-26', 'hthyh', 'A0', 'bds', 'pending', '2025-08-08 02:19:47', '2025-08-08 02:19:47'),
(2, 'MD MOSTOFA ZAMAN', 'MISHU', 'mostofazamanmishu@gmail.com', '01744585375', 'male', '2002-11-07', 'city univercity malayshia', 'A04119603', 'BRITISH', 'pending', '2025-08-09 12:22:13', '2025-08-09 12:22:13');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Malaysia', 'active', '2025-08-08 02:29:32', '2025-09-21 11:05:41');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inquiries`
--

CREATE TABLE `inquiries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `preference` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `inquiries`
--

INSERT INTO `inquiries` (`id`, `first_name`, `last_name`, `email`, `phone`, `preference`, `message`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Rafi', 'Bhuiyan', 'hghg@gmhj.com', '46457657', 'nhgjhghj', 'gjmgjmgjgj', 'pending', '2025-08-08 02:17:04', '2025-08-08 02:17:04'),
(2, 'Mahdi Bin Alam', 'Alam', 'mahdifcc3347@gmail.com', '01321228541', 'Malaysia', 'I need assistance for undergraduate admission in Malaysia.', 'pending', '2025-09-04 10:33:39', '2025-09-04 10:33:39'),
(3, 'Md.Shimul', 'Pramanik', 'md6580650@gmail.com', '01842433950', 'Malaysia', 'Please call me', 'pending', '2025-10-27 16:29:15', '2025-10-27 16:29:15'),
(4, 'Tasmia', 'Fahmin', 'tasmiafahmin07@gmail.com', '01719716480', 'Malaysia', 'I want to study in culinary arts in Malaysia. Please note that my HSC year is 2014. I didn’t completed my bechelor. & i have done IELTS. SO please let me know if I\'m eligible for culinary course in Malaysia.', 'pending', '2025-11-18 22:08:34', '2025-11-18 22:08:34');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2025_08_01_185230_create_countries_table', 1),
(6, '2025_08_01_185257_create_stories_table', 1),
(7, '2025_08_01_185404_create_universities_table', 1),
(8, '2025_08_01_185652_create_applications_table', 1),
(9, '2025_08_01_185923_create_inquiries_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stories`
--

CREATE TABLE `stories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `data` text NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stories`
--

INSERT INTO `stories` (`id`, `image`, `title`, `description`, `data`, `status`, `created_at`, `updated_at`) VALUES
(2, 'stories/01KFCWX7CRTVQ7WFA7BW34KJX2.jpg', 'Arafat Amin - City University Malaysia', '<p>Alhamdulillah! We are proud to announce that one more student has successfully received <strong>EMGS approval</strong> for the <strong>Bachelor of Civil Engineering (Honours)</strong> program at <strong>City University Malaysia</strong>.</p><p><strong>Congratulations to Arafat!</strong></p><p>Our sincere appreciation to choosing <strong>NH Global Education</strong> as your trusted partner. We remain committed to enabling academic success through streamlined processes and strategic guidance.</p><p><strong>NH Global Education</strong> stands as your strongest ally in turning educational aspirations into reality.<br> If you are planning to pursue higher education in Malaysia and are looking for a fast, efficient, and reliable process, connect with <strong>NH Global Education</strong> today.</p><p>Make the smart choice.<br>Choose <strong>NH Global Education</strong> as your partner in achieving your dreams.</p>', '[\"#StudyinMalaysia\",\"#nhglobaleducation\",\"#CityUMalaysia\",\"#SuccessStories\",\"#EMGSAproval\"]', 'active', '2026-01-19 23:09:16', '2026-01-19 23:09:16'),
(3, 'stories/01KFDDXDY30MV4KQ1ZQXDYY2VE.jpg', 'UNIMY Bachelor Program: e-Visa Approved', '<p>&nbsp;Another<strong> e-Visa Success</strong> at <strong>University Malaysia of Computer Science &amp; Engineering (UNIMY)!</strong></p><p>We are delighted to share that <strong>Omar</strong> has successfully received his <strong>e-Visa</strong> for the <strong>Bachelor of Computer Science</strong> program at the prestigious<br> <strong>University Malaysia of Computer Science &amp; Engineering (UNIMY), Malaysia</strong>.</p><p>🎓🌍 <strong>Congratulations to you, Omar!</strong><br> We are truly proud of this achievement and wish you great success in your academic journey ahead.</p><p>🤝 A heartfelt thank you for choosing <strong>NH Global Education</strong>.<br> We are always committed to supporting students in achieving their international education dreams.</p><p><br></p>', '[\"#StudyAbroadJourney\",\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation\",\"#unimy\"]', 'active', '2026-01-20 04:06:28', '2026-01-20 04:06:28'),
(4, 'stories/01KFG6DGRPKSPK4WY9QY95D2HC.jpg', 'NH Global Education – Guiding Your Global Study Journey', '<p><strong>Thank you very much, Rabbani, for choosing NH Global Education.</strong></p><p>Are you interested in taking admission at the <strong>International University College of Management and Sports (ICMS)</strong>?</p><p>👉 Then why wait?<br>&nbsp;Contact <strong>NH Global Education</strong> today and take the first step toward fulfilling your higher education dreams! 🎯✨</p>', '[\"#studyabroad\",\"#nhglobaleducation\",\"#dreambig\",\"#counselingservices\",\"#icms\"]', 'active', '2026-01-21 05:53:11', '2026-01-21 05:53:11'),
(5, 'stories/01KFJAJHMSTZTHTM1B5BC0Z8SD.jpg', 'Student e-Visa Approved for City University Malaysia', '<p>We are delighted to share that <strong>Arpon</strong> has successfully received an <strong>e-Visa</strong> for the <strong>Bachelor of Hospitality Management</strong> program at <strong>City University, Malaysia</strong>.</p><p>🥳 <strong>Congratulations to you, Arpon!</strong> 🥳</p><p>🌍 Thank you for choosing <strong>NH Global Education</strong>.<br> We are proud to be a part of your journey toward achieving your dreams and are truly excited about your future ahead.</p><p>✨ <strong>Your dream, our commitment.</strong> ✨</p>', '[\"#visasuccess\",\"#StudyAbroadJourney\",\"#nhglobaleducation\",\"#cityuniversitymalaysia\"]', 'active', '2026-01-22 01:44:18', '2026-01-22 01:44:18'),
(6, 'stories/01KFJHPK9SG3HEA5MNJ5E5ZS5B.jpg', 'NH Global Education: Opening Doors to Global Education', '<p>Thank you very much, <strong>Tauhidur,</strong> for choosing<strong> NH Global Education</strong>.</p><p>Do you want to take admission to <strong>City University Malaysia</strong>?</p><p>👉<strong> Then why wait</strong>? Contact <strong>NH Global Education</strong> today and take the first step toward fulfilling your higher education dreams! 🎯✨</p>', '[\"#dreambig\",\"#studyinmalaysia\",\"#nhglobaleducation\",\"#cityumalaysia\"]', 'active', '2026-01-22 03:48:51', '2026-01-22 03:48:51'),
(7, 'stories/01KFJQQWZY64TTNQ81CV39DX67.png', 'NH Global Education Presents: Your Path to UNIMY!', '<p>Thank you very much Nazmul, for choosing<strong> NH Global Education.</strong></p><p>&nbsp;Are you interested in taking admission to <strong>University Malaysia of Computer Science &amp; Engineering (UNIMY)</strong>?</p><p>👉 Then why wait? Contact <strong>NH Global Education </strong>today and take the first step toward fulfilling your higher education dreams! 🎯✨</p>', '[\"#studyabroad\",\"#studyinmalaysia\",\"#nhglobaleducation\",\"#unimy\"]', 'active', '2026-01-22 05:34:26', '2026-01-22 05:34:26'),
(8, 'stories/01KFQCGE5XNNZ0357916VZE5PZ.png', 'Proud Moment for NH Global Education – EMGS Approval Granted', '<p>✅✅ <strong>Alhamdulillah!</strong> Another file has received <strong>EMGS approval</strong> for the <strong>Bachelor of Information Technology</strong> program at <strong>City University Malaysia</strong>!!!<br> <strong>Congratulations to Razin 🏅</strong></p><p>Many thanks for choosing <strong>NH Global Education</strong>.<br> <strong>NH Global Education</strong> is your biggest partner in fulfilling your dreams.</p>', '[\"emgsapproval\",\"#StudyinMalaysia\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-01-24 00:54:19', '2026-01-24 00:54:19'),
(9, 'stories/01KFT9RMXXQV1PPN3KYD1FQDQ0.png', 'Shape Your Global Future with NH Global Education at UNIMY', '<p><strong>Thank you very much Mishad for choosing NH Global Education.</strong></p><p>Are you interested in taking admission at the<strong> University Malaysia of Computer Science &amp; Engineering (UNIMY)?</strong></p><p>👉 Then why wait?</p><p>&nbsp;Contact<strong> NH Global Education</strong> today and take the first step toward fulfilling your higher education dreams! 🎯✨</p>', '[\"#studyabroad\",\"#dreambig\",\"#nhglobaleducation\",\"#unimy\"]', 'active', '2026-01-25 04:04:06', '2026-01-25 04:04:06'),
(10, 'stories/01KFTE6YC9JRS1598B0E5GFZAT.png', '🌍 Dreams Take Flight: Another e-Visa Success at City University Malaysia', '<p>🎉✨ <strong>Another e-Visa at City University Malaysia!</strong>&nbsp;</p><p>We are delighted to share that <strong>Arafat</strong> has received his <strong>e-Visa</strong> for the <strong>Bachelor of Civil Engineering (Honours)</strong> program at <strong>City University, Malaysia</strong>. 🎓✈️</p><p><strong>Congratulations to you!</strong></p><p>Thank you so much for choosing <strong>NH Global Education</strong>. 🌍<br> We are proud to be a part of his journey toward fulfilling his dreams and are truly excited for his future ahead. ✨</p>', '[\"#visasuccess\",\"#StudyAbroadJourney\",\"#nhglobaleducation\",\"#cityuniversitymalaysia\"]', 'active', '2026-01-25 05:21:49', '2026-01-25 05:21:49'),
(11, 'stories/01KG1X7S8SVBAHPFFPDEJD6MVB.png', ' EMGS Approval – City University Malaysia', '<p>✅✅ <strong>Alhamdulillah!</strong><br> Another EMGS approval has been received for the <strong>Master of Science in Business Administration</strong> program at <strong>City University Malaysia</strong>!</p><p>🎉 <strong>Congratulations to Mishu</strong> 🏅</p><p>Thank you so much for choosing <strong>NH Global Education</strong>.<br> <strong>NH Global Education</strong> is your strongest partner in turning your dreams into reality.</p>', '[\"#StudyinMalaysia\",\"#officialrepresentative\",\"#emgsapproval\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-01-28 02:59:06', '2026-01-28 02:59:06'),
(12, 'stories/01KG205RA9PDMRXP84320XNJW7.png', '👉 Choose NH Global Education. Choose Your Future.', '<p><strong>**“We extend our heartfelt thanks to you, Amit, for choosing NH Global Education.</strong></p><p>Are you interested in taking admission to <strong>UNITAR International University</strong>?</p><p>👉 Then why wait any longer? Contact<strong> NH Global Education</strong> today and take the first step toward fulfilling your higher education dreams! 🎯✨”**</p>', '[\"#studyabroad\",\"#dreambig\",\"#nhglobaleducation\",\"#UNITAR\"]', 'active', '2026-01-28 03:50:25', '2026-01-28 03:50:25'),
(13, 'stories/01KG20Q871VSBZAG1Z368NRYNY.png', 'Another EMGS Approval Achieved Through NH Global Education', '<p>✅✅ <strong>Alhamdulillah!</strong> One more file has received <strong>EMGS approval</strong> for the <strong>Bachelor in Hospitality Management</strong> program at <strong>City University Malaysia</strong>.</p><p>🎉 <strong>Congratulations to Tauhidur</strong> 🏅</p><p>Thank you very much for choosing <strong>NH Global Education</strong>.<br> <strong>NH Global Education</strong> is your strongest partner in achieving your dreams.</p>', '[\"#StudyinMalaysia\",\"#emgsapproval\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-01-28 03:59:58', '2026-01-28 03:59:58'),
(14, 'stories/01KG21SG7YRB7DHBKKXC22BS70.png', 'EMGS Approval-City University Malaysia  ', '<p>✅✅ <strong>Alhamdulillah!</strong><br> Another file has received <strong>EMGS approval</strong> for the <strong>Bachelor of Business Administration (BBA)</strong> program at <strong>City University Malaysia</strong>!</p><p><strong>Congratulations to Asif 🏅</strong></p><p>Heartfelt thanks to you for choosing <strong>NH Global Education</strong>.<br> <strong>NH Global Education is your strongest partner in fulfilling your dreams.</strong></p>', '[\"#StudyinMalaysia\",\"#emgsapproval\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-01-28 04:18:41', '2026-01-28 04:18:41'),
(15, 'stories/01KG4PZBPQTE8QN6PT589CCWPP.png', 'Turning Dreams into Degrees: EMGS Approval Secured at University of Cyberjaya', '<p>✅✅ <strong>Alhamdulillah!</strong> Another file for the <strong>Master of Medical Science</strong> program at <strong>University of Cyberjaya</strong> has received <strong>EMGS approval</strong>!</p><p><strong>Congratulations to Nusrat</strong> 🏅</p><p>Many thanks for choosing <strong>NH Global Education</strong>.</p><p><strong>NH Global Education is your biggest partner in fulfilling your dreams.</strong></p>', '[\"#studyabroad\",\"#emgsapproal\",\"#nhglobaleducation\",\"#cyberjaya\"]', 'active', '2026-01-29 05:04:45', '2026-01-29 05:07:21'),
(16, 'stories/01KG4Q7RVD9VQD6SDMX37DVZ9G.png', 'NH Global Education Delivers Another EMGS Approval Success', '<p>✅✅ <strong>Alhamdulillah!</strong> Another application for the <strong>Master in Science</strong> program at <strong>University of Cyberjaya</strong> has received <strong>EMGS approval</strong>!</p><p><strong>Congratulations to Robiul</strong> 🏅</p><p>Many thanks for choosing <strong>NH Global Education</strong>.</p><p><strong>NH Global Education is your strongest partner in achieving your dreams.</strong></p>', '[\"#studyabroad\",\"#emgsapproval\",\"#nhglobaleducation\",\"#cyberjayauniversity\"]', 'active', '2026-01-29 05:11:57', '2026-01-29 05:11:57'),
(17, 'stories/01KG4QFKMEW3T8G00RNXYQ8YSZ.png', 'Your Study Abroad Partner: NH Global Education', '<p>Many thanks to <strong>Maynul</strong> for choosing <strong>NH Global Education</strong>.</p><p>Are you looking to get admission to <strong>City University Malaysia</strong>?</p><p>👉 Then why wait? Contact <strong>NH Global Education</strong> today and take the first step toward fulfilling your higher education dreams! 🎯✨</p>', '[\"#studyabroad\",\"#counselingservices\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-01-29 05:16:14', '2026-01-29 05:16:14'),
(18, 'stories/01KG4QTNSBDMQ4SN8DMX3XZ7JE.png', '\"NH Global Education Celebrates Razin’s e-Visa Success!\"', '<p>🎉✨ <strong>Another e-Visa at City University Malaysia!</strong></p><p>We are delighted to share the joyful news that <strong>Razin has received his e-Visa</strong> for the <strong>Bachelor of Information Technology (Honours)</strong> program at <strong>City University Malaysia</strong>.<br> <strong>Congratulations to you!</strong></p><p>Many thanks for choosing <strong>NH Global Education</strong>. 🌍<br> We are proud to be a part of his journey toward achieving his dreams and are extremely excited about his future.</p>', '[\"#StudyAbroadJourney\",\"#visasuccess\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-01-29 05:22:17', '2026-01-29 05:22:17'),
(19, 'stories/01KG4RGCZMRDXSTVHFKTCKF67A.png', 'Congratulations Priom: EMGS Approval Secured for Foundation in Business', '<p>&nbsp;✅✅ <strong>Alhamdulillah</strong>! Another file has received<strong> EMGS approval</strong> for the Foundation in Business program at <strong>City University Malaysia!!!</strong><br> <strong>Congratulations to Priom 🏅</strong><br> Many thanks for choosing<strong> NH Global Education.</strong><br> <strong>NH Global Education</strong> is your biggest partner in fulfilling your dreams.&nbsp;</p>', '[\"#studyabroad\",\"#emgsapproval\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-01-29 05:34:09', '2026-01-29 05:34:09'),
(20, 'stories/01KG4RZTN8AK8NTJHTFYFPGVRW.png', 'Sohel’s BBA Path Paved: EMGS Approval Secured', '<p>&nbsp;✅✅ Alhamdulillah! Another file has received <strong>EMGS approval</strong> for the <strong>Bachelor of Business Administration</strong> program at<strong> City University Malaysia!!!</strong><br> <strong>Congratulations to Sohel 🏅</strong><br> Many thanks for choosing<strong> NH Global Education.</strong><br> <strong>NH Global Education </strong>is your biggest partner in fulfilling your dreams.&nbsp;</p>', '[\"#dreambig\",\"#studyabroad\",\"#emgsapproval\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-01-29 05:42:33', '2026-01-29 05:42:33'),
(21, 'stories/01KGC8EY98ZFATKET8TR7KQGYK.png', 'University of Cyberjaya e-Visa Success 🎓', '<p>🎉✨ <strong>Another e-Visa at the University of Cyberjaya!</strong></p><p>We are delighted to share the happy news that <strong>Nusrat has received her e-Visa</strong> for the <strong>Master in Medical Science</strong> program at <strong>University of Cyberjaya, Malaysia</strong>.<br> <strong>Congratulations to you!</strong></p><p>Thank you so much for choosing <strong>NH Global Education</strong>. 🌍</p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation\",\"#cyberjayauniversity\"]', 'active', '2026-02-01 03:27:39', '2026-02-01 03:27:39'),
(22, 'stories/01KGC9267C3008RY28HV55TSCH.png', 'Study in Malaysia with Confidence – Choose NH Global Education', '<p>Thank you very much <strong>Talha</strong> for choosing <strong>NH Global Education</strong>!</p><p>Are you planning to take admission at <strong>City University Malaysia</strong>?</p><p>👉 Then why wait? Contact <strong>NH Global Education</strong> today and take the first step toward<strong> fulfilling your higher education dreams!</strong> 🎯✨</p>', '[\"#counselingservices\",\"#visaprocessing\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-02-01 03:38:10', '2026-02-01 03:38:10'),
(23, 'stories/01KGHEWVAZ9XBW59WNWEEF1XX8.png', '✨ Dreams Take Flight: e-Visa Granted for City University Malaysia', '<p>&nbsp;🎉✨ <strong>Another e-Visa at City University Malaysia!</strong><br> We are delighted to share the happy news that <strong>Mishu has received an e-Visa</strong> for the <strong>Master of Science in Business Administration</strong> program at <strong>City University Malaysia</strong>.<br> <strong>Congratulations to you!</strong><br> Many thanks for choosing <strong>NH Global Education</strong>. 🌍&nbsp;</p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation\",\"#cityuniversitymalaysia\"]', 'active', '2026-02-03 03:56:18', '2026-02-03 03:56:18'),
(24, 'stories/01KGHJPGCGHY948WKQRGJDE76T.jpg', 'Admission Made Easy with NH Global Education', '<p>Thank you very much<strong>&nbsp;Sadman&nbsp;</strong>for choosing <strong>NH Global Education</strong>.</p><p>Are you looking to take admission at <strong>City University Malaysia</strong>? 👉 Then why wait? Contact <strong>NH Global Education</strong> today and take the first step toward fulfilling your higher education dreams! 🎯✨</p>', '[\"#studyabroad\",\"#AdmissionOpen\",\"#cityumalaysia\",\"#nhglobaleducation\"]', 'active', '2026-02-03 05:02:44', '2026-02-03 05:02:44'),
(25, 'stories/01KGPN504VRXVFD270XK9PVC7G.png', 'Begin Your Global Education Journey Today', '<p><strong>Thank you very much, Mithoun, for choosing NH Global Education!</strong></p><p>Are you planning to take admission at<strong> City University Malaysia?</strong><br> 👉 Then why wait any longer? Contact <strong>NH Global Education</strong> today and take the first step toward fulfilling your higher education dreams! 🎯✨</p>', '[\"#studyabroad\",\"#counselingservices\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-02-05 04:21:50', '2026-02-05 04:21:50'),
(26, 'stories/01KGXY67GB1VEW8EZXAHBJ1M5A.png', 'Proud Moment: E-Visa Approval for City University Malaysia 🎓', '<p>🎉✨ <strong>Another e-Visa at City University Malaysia!</strong></p><p>We are delighted to share the happy news that <strong>Mithun has received an e-Visa</strong> for the <strong>Master of Science in Business Administration</strong> program at <strong>City University, Malaysia</strong>!</p><p><strong>Congratulations to you!</strong><br> Many thanks for choosing <strong>NH Global Education</strong>. 🌍</p>', '[\"#malaysiavisa\",\"#StudyAbroadJourney\",\"#nhglobaleducation\",\"#visasuccess\",\"#cityuniversitymalaysia\"]', 'active', '2026-02-08 00:14:27', '2026-02-08 00:14:27'),
(27, 'stories/01KGXYP2SXXTV884XT9MWJWJ3N.png', 'From Application to Approval: Another E-Visa Victory', '<p>🎉✨ <strong>Another e-Visa at City University Malaysia!</strong></p><p>We are delighted to announce that <strong>Asif has received an e-Visa</strong> for the <strong>Bachelor of Information Technology</strong> program at <strong>City University, Malaysia</strong>!</p><p><strong>Congratulations to you!</strong><br> Many thanks for choosing <strong>NH Global Education</strong>. 🌍</p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation\",\"#cityuniversitymalaysia\"]', 'active', '2026-02-08 00:23:08', '2026-02-08 00:23:08'),
(28, 'stories/01KGY9PP8ZB9PSQE8VNQ15B4VA.png', 'NH Global Education: Your Success, Our Mission', '<p>&nbsp;<strong>“Countless thanks to you, Tusar, for choosing NH Global Education!</strong><br> Are you looking to get admission to <strong>City University Malaysia</strong>?<br> 👉 Then why wait any longer? Contact <strong>NH Global Education</strong> today and take the first step toward fulfilling your dream of higher education! 🎯✨”&nbsp;</p>', '[\"#studyabroad\",\"#dreambig\",\"#nhglobaleducation\",\"#cityuniversitymalaysia\"]', 'active', '2026-02-08 03:35:41', '2026-02-08 03:35:41'),
(29, 'stories/01KGYCRN3SQCT5Z815H0Q5J5S0.png', '\"🎓 From Aspiration to Reality: Robiul’s e-Visa Success Story!\"', '<p>&nbsp;🎉✨<strong> Another e-visa for the University of Cyberjaya!!!</strong><br> We are delighted to announce that <strong>Robiul has received an e-Visa</strong> for the Master of Science program at the <strong>University of Cyberjaya, Malaysia!</strong><br> \"Congratulations to you!\"<br> Many thanks for choosing<strong> NH Global Education</strong>. 🌍&nbsp;</p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation\",\"#cyberjayauniversity\"]', 'active', '2026-02-08 04:29:12', '2026-02-08 04:29:12'),
(30, 'stories/01KGYHFT4BTEJF7T1DCCB2P4ET.png', 'Shaping Global Education Pathways with NH Global Education', '<p>&nbsp;<strong>“Countless thanks to you, Azad</strong>, for choosing <strong>NH Global Education!</strong><br> Are you looking to take admission at<strong> City University Malaysia?</strong><br> 👉 Then why wait any longer? Contact<strong> NH Global Education </strong>today and take the first step toward fulfilling your higher education dreams! 🎯✨”&nbsp;</p>', '[\"#studyabroad\",\"#counselingservices\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-02-08 05:51:44', '2026-02-08 05:51:44'),
(31, 'stories/01KHJHA8FY0755XWCW0Q9V1K48.png', 'Another Milestone Achieved – EMGS Approval Confirmed', '<p>✅✅ Alhamdulillah!<strong> Another file has received EMGS approval </strong>for the Bachelor of Hospitality Management program at <strong>City University Malaysia!!!</strong></p><p><strong>Congratulations to Sakif 🏅</strong></p><p>Many thanks for choosing<strong> NH Global Education.</strong><br> <strong>NH Global Education </strong>is your greatest partner in achieving your dreams.</p>', '[\"#StudyinMalaysia\",\"#studyabroad\",\"#emgsapproval\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-02-16 00:13:31', '2026-02-16 00:13:31'),
(32, 'stories/01KHJJ7DCXVTRXHA2W8AC7T4WP.png', 'Multimedia University – EMGS Approval Achievement', '<p>✅✅ <strong>Alhamdulillah! Another file has received EMGS approval for the Master of Education program at Multimedia University!!!</strong></p><p><strong>Congratulations to Sadin 🏅</strong></p><p>Many thanks for choosing <strong>NH Global Education.</strong><br> <strong>NH Global Education</strong> is your greatest partner in achieving your dreams.</p>', '[\"#studyabroad\",\"#StudyinMalaysia\",\"#emgsapproval\",\"#nhglobaleducation\",\"#multimediauniversity\"]', 'active', '2026-02-16 00:29:26', '2026-02-16 00:29:26'),
(33, 'stories/01KHJNRP2G6PZ2T0VK2JF4Y6SB.png', 'Shape Your Future with NH Global Education Today! 🎯', '<p><strong>Thank you very much, Sabikunnahar, for choosing NH Global Education!</strong></p><p>Are you planning to take admission at <strong>City University Malaysia?</strong></p><p>👉 Then why wait? Contact <strong>NH Global Education</strong> today and take the first step toward fulfilling your higher education dreams! 🎯✨</p>', '[\"#studyabroad\",\"#dreambig\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-02-16 01:31:18', '2026-02-16 01:31:18'),
(34, 'stories/01KHJTNEP4QJA1W528W6CZGEPZ.png', 'Dreams in Motion: Siam Gets EMGS Approval for BBA', '<p>✅✅<strong> Alhamdulillah! Another file has received EMGS approval for the Bachelor of Business Administration program at City University Malaysia!!!</strong></p><p><strong>Congratulations to Siam 🏅</strong></p><p>Many thanks for choosing <strong>NH Global Education.</strong><br> Your biggest partner in achieving your dreams is <strong>NH Global Education.</strong></p>', '[\"#StudyinMalaysia\",\"#emgsapproval\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-02-16 02:56:55', '2026-02-16 02:56:55'),
(35, 'stories/01KHJXQRE7GKKVQC20447R737W.png', 'Your Dream, Our Support – EMGS Approval Success!', '<p>✅✅ Alhamdulillah! Another file has received EMGS approval for the <strong>Bachelor of Information Technology</strong> program at <strong>University of Cyberjaya</strong>!!!<br> Congratulations to <strong>Nasir</strong> 🏅<br> Many thanks for choosing <strong>NH Global Education</strong>.<br> NH Global Education is your greatest partner in making your dreams come true.</p>', '[\"#StudyinMalaysia\",\"#emgsapproval\",\"#nhglobaleducation\",\"#cyberjayauni\"]', 'active', '2026-02-16 03:50:36', '2026-02-16 03:50:36'),
(36, 'stories/01KHK12GZZM4AFHHXEXKZA84K6.png', '\"🌐 From Aspiration to Reality – UNIMY CS Master’s EMGS Approval!\"', '<p>&nbsp;✅✅ Alhamdulillah! Another file has received <strong>EMGS approva</strong>l for the <strong>Master in Computer Science program at University Malaysia of Computer Science &amp; Engineering (UNIMY)!!!</strong><br> <strong>Congratulations to Azizul🏅</strong><br> Thank you for choosing <strong>NH Global Education.</strong><br> <strong>NH Global Education</strong> is your greatest companion in achieving your dreams.</p>', '[\"#StudyinMalaysia\",\"#emgsapproval\",\"#nhglobaleducation\",\"#unimy\"]', 'active', '2026-02-16 04:48:54', '2026-02-16 04:48:54'),
(37, 'stories/01KHK3MDNYTWW94MM60DQRMBY7.png', '🌍 Borders Crossed, Dreams Unlocked – E-Visa Approved!', '<p>🎉✨ Another e-Visa for <strong>INTI International University</strong>!</p><p>We are delighted to share that Mousum has received her e-Visa for the <strong>Foundation in Information Technology</strong> program at <strong>INTI International University, Malaysia!</strong></p><p><strong>Congratulations to you!</strong> 🎓✨</p><p>Many thanks for choosing <strong>NH Global Education. 🌍</strong></p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation\",\"#inti\"]', 'active', '2026-02-16 05:33:38', '2026-02-16 05:33:38'),
(38, 'stories/01KHQZQA9V468G03QGSQ65STZ6.png', 'Where Dreams Meet Determination – Another Approval Unlocked', '<p>✅✅ Alhamdulillah!<strong> Another file has received EMGS approva</strong>l for the Bachelor of Business and Commerce program at <strong>Monash University Malaysia!!!</strong></p><p><strong>Congratulations to Orne 🏅</strong></p><p>Many thanks for choosing<strong> NH Global Education.</strong><br> Your biggest partner in achieving your dreams —<strong> NH Global Education.</strong></p>', '[\"#StudyinMalaysia\",\"#emgsapproval\",\"#nhglobaleducation\",\"#monashuniversity\"]', 'active', '2026-02-18 03:01:31', '2026-02-18 03:01:31'),
(39, 'stories/01KHR013K5KTDNEVMHZ8GYBNX2.png', 'Visa Victory! Another Future Engineer Heads to Multimedia University', '<p><strong>🎉✨ Another e-Visa for Multimedia University!!!</strong></p><p>We are delighted to announce that <strong>Sadin has received his e-Visa</strong> for the <strong>Master of Engineering Science program</strong> at <strong>Multimedia University, Malaysia!</strong></p><p><strong>Congratulations to you! 🎓</strong></p><p>Many thanks for choosing <strong>NH Global Education. 🌍</strong></p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation\",\"#mmu\"]', 'active', '2026-02-18 03:06:52', '2026-02-18 03:06:52'),
(40, 'stories/01KHR79SDRVD5J87QN66WAD3JZ.png', '\"Next Stop: City University Malaysia – e-Visa Secured!\"', '<p>&nbsp;<strong>🎉✨ Another e-visa for City University Malaysia!!!</strong><br> We are happy to announce that<strong> Sohel has received an e-Visa</strong> for the <strong>Bachelor of Business Administration</strong> program at <strong>City University Malaysia</strong>!<br> \"Congratulations to you!\"<br> Many thanks for choosing <strong>NH Global Education</strong>. 🌍&nbsp;</p>', '[\"#StudyAbroadJourney\",\"#visasuccess #\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-02-18 05:13:56', '2026-02-18 05:13:56'),
(41, 'stories/01KHTKY8SP793XGZK4TD3JHQKA.png', '✨ Congratulations Orne – E-Visa Approved!', '<p>🎉✨ Another e-Visa for <strong>Monash University Malaysia</strong>!</p><p>We are delighted to share that Orne has received her e-Visa for the <strong>Bachelor of Business and Commerce</strong> program at Monash University Malaysia!</p><p><strong>Congratulations to you!</strong> 🎊</p><p>Many thanks for choosing <strong>NH Global Education</strong>. 🌍</p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation #\",\"#monashuniversity\"]', 'active', '2026-02-19 03:33:20', '2026-02-19 03:33:20'),
(42, 'stories/01KJ22SHQTVZZAMPFR987X3DGZ.png', 'Global Goals, Local Guidance – Visa Approved!', '<p><strong>🎉✨ Another e-Visa from University of Cyberjaya!!!</strong></p><p>We are delighted to announce that<strong> Nasir has received his e-Visa</strong> for the <strong>Bachelor of Information Technology</strong> program at the <strong>University of Cyberjaya, Malaysia!</strong></p><p><strong>Congratulations to you! 🎓✨</strong></p><p>Many thanks for choosing <strong>NH Global Education</strong>. 🌍</p>', '[\"#StudyAbroadJourney\",\"#visasuccess\",\"#nhglobaleducation\",\"#cyberjayauniversity\"]', 'active', '2026-02-22 01:07:35', '2026-02-22 01:07:35'),
(43, 'stories/01KJ2BX4ZW9PXF6GSSVJWA9D5A.png', '🏅 Congratulations Naher – EMGS Approved!', '<p>✅✅ Alhamdulillah! Another file has received <strong>EMGS approval</strong> for the <strong>Bachelor of Law Enforcement</strong> program at <strong>International University College of Management and Sports (ICMS)!!!</strong></p><p><strong>Congratulations to Naher 🏅</strong><br> Many thanks for choosing <strong>NH Global Education.</strong></p>', '[\"#StudyinMalaysia\",\"#emgsapproval\",\"#nhglobaleducation\",\"#icms\"]', 'active', '2026-02-22 03:46:49', '2026-02-22 03:46:49'),
(44, 'stories/01KJA3CX881E5YRZ1SBDC2EXQY.png', '🌟 E-Visa Approved – Malaysia Awaits!', '<p>🎉✨ Another e-Visa for <strong>City University Malaysia</strong>!</p><p>We are excited to share that Sakif has received his e-Visa for the <strong>Bachelor of Hospitality Management</strong> program at <strong>City University Malaysia!</strong></p><p><strong>Congratulations to you!</strong> 🎓</p><p>Many thanks for choosing <strong>NH Global Education</strong>. 🌍</p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-02-25 03:52:04', '2026-02-25 03:52:04'),
(45, 'stories/01KJHNB2GAJBZ776JD3S8B3A9G.png', 'Cross Borders, Create Your Future', '<p><strong>Thank you very much, Fahim, for choosing NH Global Education!</strong></p><p>Do you want to take admission at <strong>City University Malaysia?</strong></p><p>👉 Then why wait? Contact <strong>NH Global Education</strong> today and take the first step toward fulfilling your higher education dreams! 🎯✨</p>', '[\"#studyabroad\",\"#counselingservices\",\"#highereducation\",\"#cityuniversity\"]', 'active', '2026-02-28 02:20:19', '2026-02-28 02:20:19'),
(46, 'stories/01KJM4VMTZB3TNE9GMGH48PKT5.png', 'Guiding You from Application to Graduation! 🎓🤝', '<p>Thank you very much, Raju, for choosing <strong>NH Global Education!</strong></p><p>Are you looking to get admission to<strong> City University Malaysia?</strong></p><p>👉 Then why wait? Contact<strong> NH Global Education</strong> today and take the first step toward fulfilling your higher education dreams! 🎯✨</p>', '[\"#studyabroad\",\"#counselingservices\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-03-01 01:30:00', '2026-03-01 01:30:00'),
(47, 'stories/01KJMB5R21CDBD5AKJ764HZ6R2.png', 'Siam Secures e-Visa for BBA at City University Malaysia', '<p>🎉✨ Another e-Visa for <strong>City University Malaysia</strong>!</p><p>We are excited to share that Siam has received an e-Visa for the <strong>Bachelor of Business Administration</strong> program at <strong>City University Malaysia</strong>!</p><p><strong>Congratulations to you!</strong></p><p>Many thanks for choosing <strong>NH Global Education</strong>. 🌍</p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-03-01 03:20:22', '2026-03-01 03:20:22'),
(48, 'stories/01KJMCKDVR8NP01B5AMN6AMEFK.png', '🎓 Master in Computing Journey Begins – e-Visa Approved!', '<p>🎉✨ Another e-Visa from <strong>University Malaysia of Computer Science &amp; Engineering (UNIMY)</strong>!</p><p>We are delighted to announce that Azizul has received his e-Visa for the <strong>Master in Computing</strong> program at <strong>City University Malaysia</strong>.</p><p><strong>“Congratulations to you!”</strong></p><p>Many thanks for choosing<strong> NH Global Education. 🌍</strong></p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation\",\"#unimy\"]', 'active', '2026-03-01 03:45:19', '2026-03-01 03:45:19'),
(49, 'stories/01KJSDKJZ1AJXEDDAHWXPW134G.png', '🎓 E-Visa Approved for MSc in Business Administration!', '<p>🎉✨ Another e-Visa from <strong>City University Malaysia</strong>!</p><p>We are delighted to announce that Tanvin has <strong>received an e-Visa</strong> for the <strong>Master of Science in Business Administration</strong> program at<strong> City University Malaysia!</strong></p><p>\"Congratulations to you!\"</p><p>Many thanks for choosing <strong>NH Global Education</strong>. 🌍</p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-03-03 02:39:05', '2026-03-03 02:39:05'),
(50, 'stories/01KJVVCMCGHNER2C2R2GFGCZQV.png', 'EMGS Approval Secured for MBA at UNIMY! ✅', '<p>✅✅ Alhamdulillah! Another file has received EMGS approval for the Master of Business Administration program at <strong>University Malaysia of Computer Science &amp; Engineering (UNIMY)</strong>!!!</p><p>Congratulations to Akhi 🏅<br>&nbsp;Many thanks for choosing <strong>NH Global Education</strong>.</p>', '[\"#StudyinMalaysia\",\"#emgsapproval\",\"#nhglobaleducation\",\"#unimy\"]', 'active', '2026-03-04 01:18:26', '2026-03-04 01:18:26'),
(51, 'stories/01KJVZ499WVDQQ79GB91RN14ZB.png', 'Step Beyond Borders with NH GLOBAL EDUCATION', '<p><strong>Thank you very much, Tushar, </strong>for choosing <strong>NH Global Education!</strong></p><p>Are you looking to get admission to <strong>City University Malaysia</strong>?</p><p>👉 Then why wait? Contact <strong>NH Global Education</strong> today and take the first step toward fulfilling your higher education dreams! 🎯✨</p>', '[\"#studyabroad\",\"#counselingservices\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-03-04 02:23:48', '2026-03-04 02:23:48'),
(52, 'stories/01KK6DHXWWP8BASJZKDWC45FMR.png', 'Another Step Toward Global Education – UNIMY e-Visa Approved 🌍', '<p>🎉✨ Another <strong>e-Visa from the University Malaysia of Computer Science &amp; Engineering (UNIMY)!</strong></p><p>We are delighted to announce that <strong>Akhi</strong> has received an <strong>e-Visa</strong> for the <strong>Master of Business Administration (MBA)</strong> program at the <strong>University Malaysia of Computer Science &amp; Engineering (UNIMY), Malaysia</strong>.</p><p><strong>Congratulations to you!</strong></p><p>Many thanks for choosing <strong>NH Global Education</strong>. 🌍</p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation\",\"#unimy\"]', 'active', '2026-03-08 03:48:19', '2026-03-08 03:48:19'),
(53, 'stories/01KK8VX13CBKHENZF3HHSHQQM9.png', 'Congratulations Saima – EMGS Approval Achieved! 🏅', '<p>✅✅ <strong>Alhamdulillah!</strong> Another file has received <strong>EMGS approval</strong> for the <strong>Bachelor of Education (Early Childhood Education) (Honours)</strong> program at <strong>City University Malaysia</strong>!!!</p><p><strong>Congratulations to Saima 🏅</strong></p><p>Many thanks for choosing <strong>NH Global Education</strong>.<br> <strong>NH Global Education</strong> is your biggest partner in fulfilling your dreams.</p>', '[\"#StudyinMalaysia\",\"#emgsapproval\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-03-09 02:37:31', '2026-03-09 02:37:31'),
(54, 'stories/01KKB3C3XFQ824NVM7NAMYXDX5.png', 'Afrine Receives e-Visa for Medical Imaging at MAHSA University', '<p>🎉✨ <strong>Another e-Visa for MAHSA University!</strong></p><p>We are delighted to announce that <strong>Afrine</strong> has received an <strong>e-Visa</strong> for the <strong>Bachelor of Medical Imaging</strong> program at MAHSA University in Malaysia!</p><p><strong>Congratulations to you!</strong></p><p>Many thanks for choosing NH Global Education. 🌍</p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation\",\"#MahsaUniversity\"]', 'active', '2026-03-09 23:26:34', '2026-03-09 23:26:34'),
(55, 'stories/01KKBBMADMB645B73FN98F5SAE.png', 'EMGS Approved – Congrats Sifat! 🎓', '<p><strong>✅✅ Alhamdulillah! Another file has received EMGS approval for the Master of Science in Business Administration program at City University Malaysia!!!<br>&nbsp;Congratulations to Sifat 🏅</strong></p><p>Many thanks for choosing <strong>NH Global Education</strong>.<br> <strong>NH Global Education</strong> is your greatest partner in fulfilling your dreams.</p>', '[\"#StudyinMalaysia\",\"#emgsapproval\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-03-10 01:50:52', '2026-03-10 01:50:52'),
(56, 'stories/01KKTVWJPRTBCXJGZ7633R322P.png', 'Start Your Higher Education Journey with NH Global Education 🎓', '<p><strong>Thank you very much,</strong> Rohan, for choosing<strong> NH Global Education!</strong></p><p>Are you planning to take admission at<strong> City University Malaysia?</strong></p><p><br>&nbsp;👉 Then why wait? Contact <strong>NH Global Education</strong> today and take the first step toward fulfilling your higher education dreams! 🎯✨</p>', '[\"#studyabroad\",\"#counselingservices\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-03-16 02:23:36', '2026-03-16 02:23:36'),
(57, 'stories/01KKTW1R19HTWRGR6XXTT2N2R9.png', 'Choose NH Global Education for Your Global Future 🌍', '<p><strong>Thank you very much</strong> Tarikuzzaman for choosing <strong>NH Global Education!</strong></p><p>Are you planning to take admission at <strong>City University Malaysia?</strong></p><p><br>&nbsp;👉 Then why wait? Contact <strong>NH Global Education</strong> today and take the first step toward fulfilling your higher education dreams! 🎯✨</p>', '[\"#studyabroad\",\"#counselingservices\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-03-16 02:26:25', '2026-03-16 02:26:25'),
(58, 'stories/01KNGXBAPS280XG36NE1PV9Q3N.png', '🌟 Congratulations Mynul – One Step Closer to Your Dream', '<p>&nbsp;✅✅ Alhamdulillah! Another file has received <strong>EMGS approval </strong>for the <strong>Master in Information Technology program at City University Malaysia!!!</strong><br> <strong>Congratulations to Mynul 🏅</strong><br> Many thanks for choosing <strong>NH Global Education</strong>.<br> <strong>NH Global Education</strong> is your greatest partner in achieving your dreams.&nbsp;</p>', '[\"#emgsapproval\",\"#cityuniversity\",\"#nhglobaleducation\"]', 'active', '2026-04-06 02:08:07', '2026-04-06 02:08:07'),
(59, 'stories/01KNGXQNJ47GXGJD189JC1GYBN.png', '🎓 EMGS Approval Secured for Business Administration Program', '<p>✅✅ Alhamdulillah! <strong>Another file has received EMGS approva</strong>l for the <strong>Master of Science in Business Administration program at City University Malaysia!!!</strong><br> <strong>Congratulations to Azad</strong> 🏅<br> Many thanks for choosing <strong>NH Global Education</strong>.<br> <strong>NH Global Education</strong> is your greatest partner in achieving your dreams.</p>', '[\"#StudyinMalaysia\",\"#emgsapproval\",\"#cityuniversity\",\"#nhglobaleducation\"]', 'active', '2026-04-06 02:14:51', '2026-04-06 02:14:51'),
(60, 'stories/01KNGXY0YPA580JCRTC9YFMGK3.png', '🎓 EMGS Approval Secured for Bachelor of IT Program', '<p>&nbsp;✅✅ Alhamdulillah! Another file has received<strong> EMGS approval</strong> for the <strong>Bachelor of Information Technology program</strong> at <strong>City University Malaysia!!!</strong><br> <strong>Congratulations to Anik 🏅</strong><br> Many thanks for choosing <strong>NH Global Education.</strong><br> <strong>NH Global Education</strong> is your greatest partner in achieving your dreams.&nbsp;</p>', '[\"#StudyinMalaysia\",\"#emgsapproval\",\"#cityuniversity\",\"#nhglobaleducation\"]', 'active', '2026-04-06 02:18:20', '2026-04-06 02:18:20'),
(61, 'stories/01KNH6247EERRGQBDJ271FQ7K5.png', '“Congratulations Mynul! E-Visa Approved for Master’s in IT”', '<p><strong>🎉✨ Another e-Visa for City University Malaysia!!!</strong></p><p>We are delighted to announce that <strong>Mynul</strong> has received an<strong> e-Visa </strong>for the <strong>Master in Information Technology </strong>program at <strong>City University Malaysia!</strong></p><p><strong>\"Congratulations to you!\"</strong></p><p>Many thanks for choosing <strong>NH Global Education. </strong>🌍</p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#nhglobaleducation\",\"#cityuniversitymalaysia\"]', 'active', '2026-04-06 04:40:23', '2026-04-06 04:40:23'),
(62, 'stories/01KNKJGM7KF49V7R44DS4KEHCX.png', 'Congratulations Tusar on Your EMGS Approval! 🏅', '<p>“Alhamdulillah! Another file has <strong>received EMGS approval </strong>for the <strong>Bachelor of Hospitality Management </strong>program at <strong>City University Malaysia!!!</strong><br> <strong>Congratulations to Tusar 🏅</strong><br> Many thanks for choosing <strong>NH Global Education.</strong><br> <strong>NH Global Education </strong>is your greatest partner in fulfilling your dreams.”</p>', '[\"#studyabroad\",\"#emgsapproval\",\"#nhglobaleducation\",\"#cityuniversity\"]', 'active', '2026-04-07 02:56:30', '2026-04-07 02:56:30'),
(63, 'stories/01KNKJRAEXND715YVTN12MVH7W.png', 'Join UNIMY with Expert Guidance from NH Global Education', '<p>&nbsp;“<strong>Many thanks to you&nbsp; Nazmul, for choosing NH Global Education.</strong><br> Are you interested in taking admission at the <strong>University Malaysia of Computer Science &amp; Engineering (UNIMY)?</strong></p><p><br>&nbsp;👉 Then why wait?</p><p>&nbsp;Contact<strong> NH Global Education</strong> today and take the first step toward fulfilling your higher education dreams! 🎯✨”&nbsp;</p>', '[\"#studyabroad\",\"#counselingservices\",\"#nhglobaleducation\",\"#unimy\"]', 'active', '2026-04-07 03:00:42', '2026-04-07 03:00:42'),
(64, 'stories/01KNKK99JPTF2VJ1DDMVFQ9GSZ.png', 'Azad Secures e-Visa for City University Malaysia!', '<p><strong>🎉✨ Another e-visa for City University Malaysia!!!</strong></p><p>We are delighted to announce that <strong>Azad has received an e-Visa</strong> for the <strong>Master of Science in Business Administration</strong> program at <strong>City University Malaysia!</strong></p><p><strong>Congratulations to you!</strong></p><p>Many thanks for choosing <strong>NH Global Education</strong>. 🌍</p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#cityuniversitymalaysia\",\"#nhglobaleducation\"]', 'active', '2026-04-07 03:09:58', '2026-04-07 03:09:58'),
(65, 'stories/01KNPAQX47P3C70YCH5D976BNX.png', '🎓 Hasan’s Journey Begins with MMU e-Visa Approval', '<p><strong>🎉✨ Another e-Visa for Multimedia University!!!</strong></p><p>We are pleased to announce that Hasan has<strong> received an e-Visa</strong> for the <strong>Bachelor in Information Technology </strong>program at <strong>Multimedia University</strong>, Malaysia!</p><p><strong>\"Congratulations to you!\"</strong></p><p>Many thanks for choosing <strong>NH Global Education</strong>. 🌍</p>', '[\"#malaysiavisa\",\"#visasuccess\",\"#mmu\",\"#nhglobaleducation\"]', 'active', '2026-04-08 04:38:23', '2026-04-08 04:38:23'),
(66, 'stories/01KNPB3J4K15K0KXCPB9J30K5Q.png', '🎉 Thank You Onika for Choosing NH Global Education!', '<p>Many thanks to you Onika for choosing <strong>NH Global Education</strong>.</p><p>Are you interested in getting admission to the International<strong> University College of Management and Sports (ICMS)?</strong></p><p>👉 Then why wait? Contact <strong>NH Global Education</strong> today and take the first step toward achieving your higher education dreams! 🎯✨</p>', '[\"#studyabroad\",\"#counselingservices\",\"#nhglobaleducation\",\"#icms\"]', 'active', '2026-04-08 04:44:45', '2026-04-08 04:44:45'),
(67, 'stories/01KNR8N9JH75M3XQZRAE9GPE39.png', 'NH Global Education: Guiding You to Success ✨', '<p>✅✅ Alhamdulillah! Another file has<strong> received EMGS approval</strong> for the <strong>Bachelor of Information Technology</strong> program at <strong>Universiti Tun Abdul Razak!!!</strong></p><p><strong>Congratulations to Hasan 🏅</strong><br> Many thanks for choosing<strong> NH Global Education.</strong><br> <strong>NH Global Education</strong> is your greatest partner in fulfilling your dreams.</p>', '[\"#StudyinMalaysia\",\"#emgsapproval\",\"#UNIRAZAK\",\"#nhglobaleducation\"]', 'active', '2026-04-08 22:40:29', '2026-04-08 22:40:29'),
(68, 'stories/01KNRVWPAZDN13A29JPND41F02.png', '“A Bright Future Ahead – Congratulations Nazmul!”', '<p>✅✅ Alhamdulillah! Another file has received <strong>EMGS approval</strong> for the <strong>Bachelor of Computer Science with Honours </strong>program at <strong>University Malaysia of Computer Science &amp; Engineering (UNIMY)!!!</strong></p><p><strong>Congratulations to Nazmul 🏅</strong></p><p>Many thanks for choosing <strong>NH Global Education.</strong><br> <strong>NH Global Education </strong>is your greatest partner in achieving your dreams.</p>', '[\"#StudyinMalaysia\",\"#emgsapproval\",\"#unimy\",\"#nhglobaleducation\"]', 'active', '2026-04-09 04:16:34', '2026-04-09 04:16:34');

-- --------------------------------------------------------

--
-- Table structure for table `universities`
--

CREATE TABLE `universities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `founded` varchar(255) DEFAULT NULL,
  `students` varchar(255) DEFAULT NULL,
  `acceptance_rate` varchar(255) DEFAULT NULL,
  `tuition_fees` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `highlights` text DEFAULT NULL,
  `programs` text DEFAULT NULL,
  `campus_life` text DEFAULT NULL,
  `requirements` text DEFAULT NULL,
  `career_prospects` text DEFAULT NULL,
  `deadline` text DEFAULT NULL,
  `country_id` text DEFAULT NULL,
  `pdf` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `universities`
--

INSERT INTO `universities` (`id`, `image`, `name`, `location`, `founded`, `students`, `acceptance_rate`, `tuition_fees`, `description`, `highlights`, `programs`, `campus_life`, `requirements`, `career_prospects`, `deadline`, `country_id`, `pdf`, `status`, `created_at`, `updated_at`) VALUES
(2, 'university/01K3FQ26ZN7HSX20KH7Z4J3RGK.webp', 'City University Malaysia', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', 'pdf/01K5PM15FS7XBE5YDVP8T7AQ2Q.pdf', 'active', '2025-08-24 22:16:29', '2025-09-21 11:09:35'),
(3, 'university/01K5PN8Z6VMXQ5ZR72901YA16R.png', 'INTI International University and Colleges', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', 'pdf/01K5PN6KCZ67FX3CF54GK7BAFC.pdf', 'active', '2025-09-21 11:18:14', '2025-09-21 11:31:18'),
(4, 'university/01K5PPFDC53G9WNXK56MV8KHR9.jpg', 'University Of Cyberjaya, Malaysia', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', 'pdf/01K5PPFE7WDZWJTK0NFQ1J4K7Y.pdf', 'active', '2025-09-21 11:52:18', '2025-09-21 11:52:18'),
(5, 'university/01K8B69HJ6GQ38W21254E62RS4.jpg', 'SEGi University & Colleges', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', 'pdf/01K8B69JF5J0GXJQ1ANZF1Q2KB.pdf', 'active', '2025-10-24 07:24:56', '2025-10-24 07:24:56');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'dev', 'dev@gmail.com', NULL, '$2y$10$aWpjMEA0dmLQ7LNesCBh6OA/J5YWHzaR9bYjygYFa/zTXcxdbljYu', 'Sag7aRAdBcuYEct3JWxGUecBcCUid1XrEkvOIQ1mQbgg2hjrDwOpmhOKWOHh', '2025-08-03 11:50:28', '2025-08-03 11:50:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `inquiries`
--
ALTER TABLE `inquiries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `stories`
--
ALTER TABLE `stories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `universities`
--
ALTER TABLE `universities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inquiries`
--
ALTER TABLE `inquiries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stories`
--
ALTER TABLE `stories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `universities`
--
ALTER TABLE `universities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
