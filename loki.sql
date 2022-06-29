-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 27 Jun 2022 pada 23.07
-- Versi server: 10.4.16-MariaDB
-- Versi PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loki`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `courses`
--

CREATE TABLE `courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `curriculum_id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `alias_name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `credit` int(11) NOT NULL,
  `semester` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `courses`
--

INSERT INTO `courses` (`id`, `curriculum_id`, `code`, `name`, `alias_name`, `credit`, `semester`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, '	JSI62125', 'Pemrograman Web', 'PWeb', 3, 4, 'Belajar web', '2022-06-12 12:28:36', '2022-06-12 12:28:36'),
(2, 1, 'JSI62120', 'Perancangan Basis Data', 'PBD', 4, 4, 'Merancang aplikasi menggunakan database', '2022-06-12 12:28:26', '2022-06-12 12:28:26'),
(3, 2, 'JSI62121', 'Analisis Dan Visualisasi Data', 'AVD', 3, 4, 'Belajar Visualisasi data', '2022-06-12 12:36:56', '2022-06-12 12:36:56'),
(4, 1, 'JSI62110', 'Probabilitas Dan Statistik', 'Probstat', 3, 4, 'Belajar statistik dan probabilitas', '2022-06-12 12:45:21', '2022-06-12 12:45:21');

-- --------------------------------------------------------

--
-- Struktur dari tabel `course_los`
--

CREATE TABLE `course_los` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_plan_id` bigint(20) UNSIGNED NOT NULL,
  `type` int(11) NOT NULL DEFAULT 1,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `course_los`
--

INSERT INTO `course_los` (`id`, `course_plan_id`, `type`, `code`, `name`, `parent_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'CL01', 'Mahasiswa mampu', 1, '2022-06-23 17:33:38', '2022-06-23 17:33:38'),
(3, 79, 1, '2', 'ss', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `course_lo_details`
--

CREATE TABLE `course_lo_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `curriculum_lo_id` bigint(20) UNSIGNED NOT NULL,
  `course_lo_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `course_plans`
--

CREATE TABLE `course_plans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_id` bigint(20) UNSIGNED NOT NULL,
  `rev` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `alias_name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `credit` int(11) NOT NULL,
  `semester` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `material` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED DEFAULT NULL,
  `validated_by` bigint(20) UNSIGNED DEFAULT NULL,
  `validated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `course_plans`
--

INSERT INTO `course_plans` (`id`, `course_id`, `rev`, `code`, `name`, `alias_name`, `credit`, `semester`, `description`, `material`, `created_by`, `validated_by`, `validated_at`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'KRS01', 'Pemrograman Web', 'PWeb', 3, 4, 'KRS Mata Kuliah Pemrograman Web', '-', NULL, NULL, '2022-06-13 17:23:07', '2022-06-13 17:23:07', '2022-06-13 17:23:07'),
(3, 4, 1, 'JSI62121', 'Analisis dan Visualisasi Data\r\n', 'Avd', 3, 4, 'Belajar visualisasi data', NULL, NULL, NULL, NULL, NULL, NULL),
(79, 1, 3, 'KRS01', 'Pemrograman Web', 'PWeb', 3, 4, 'Belajar Web', NULL, NULL, NULL, NULL, NULL, NULL),
(96, 1, 4, 'KRS01', 'Pemrograman Web', 'PWeb', 3, 4, 'Belajar Web', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `course_plan_assessments`
--

CREATE TABLE `course_plan_assessments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_plan_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `percentage` double NOT NULL,
  `flag` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `course_plan_assessments`
--

INSERT INTO `course_plan_assessments` (`id`, `course_plan_id`, `name`, `percentage`, `flag`, `created_at`, `updated_at`) VALUES
(1, 1, 'projek', 50, 1, NULL, NULL),
(2, 1, 'Tugas', 50, 1, NULL, NULL),
(3, 79, 'ddd', 22, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `course_plan_details`
--

CREATE TABLE `course_plan_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_plan_id` bigint(20) UNSIGNED NOT NULL,
  `week` int(11) NOT NULL,
  `material` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `method` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `student_experience` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `course_plan_details`
--

INSERT INTO `course_plan_details` (`id`, `course_plan_id`, `week`, `material`, `method`, `student_experience`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '1. Pengenalan WEB a. Web dan Hypertext Document b. Protokol HTTP (method dan status message) c. Client side (front-end)', 'Presentasi Dosen dan diskusi (3 x 50 mnt)', 'Mahasiswa memberikan tanggapan tentang konsep dasar dan komponen aplikasi berbasis web', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `course_plan_detail_assessments`
--

CREATE TABLE `course_plan_detail_assessments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_plan_detail_id` bigint(20) UNSIGNED NOT NULL,
  `course_plan_assessment_id` bigint(20) UNSIGNED NOT NULL,
  `percentage` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `course_plan_detail_outcomes`
--

CREATE TABLE `course_plan_detail_outcomes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_plan_detail_id` bigint(20) UNSIGNED NOT NULL,
  `course_lo_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `course_plan_detail_refs`
--

CREATE TABLE `course_plan_detail_refs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_plan_detail_id` bigint(20) UNSIGNED NOT NULL,
  `course_plan_reference_id` bigint(20) UNSIGNED NOT NULL,
  `category` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `course_plan_lecturers`
--

CREATE TABLE `course_plan_lecturers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_plan_id` bigint(20) UNSIGNED NOT NULL,
  `lecturer_id` bigint(20) UNSIGNED NOT NULL,
  `creator` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `course_plan_lecturers`
--

INSERT INTO `course_plan_lecturers` (`id`, `course_plan_id`, `lecturer_id`, `creator`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 1, '2022-06-13 18:05:50', '2022-06-13 18:05:50'),
(2, 3, 2, 2, '2022-06-23 17:16:55', '2022-06-23 17:16:55');

-- --------------------------------------------------------

--
-- Struktur dari tabel `course_plan_references`
--

CREATE TABLE `course_plan_references` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_plan_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `publisher` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `course_plan_references`
--

INSERT INTO `course_plan_references` (`id`, `course_plan_id`, `title`, `author`, `publisher`, `year`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, 'HTML5 Up and Running', 'Mark Pilgrim', 'O’Reilly', 2010, 'Mengenai HTML5 Up and Running', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `course_requirements`
--

CREATE TABLE `course_requirements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_id` bigint(20) UNSIGNED NOT NULL,
  `required_course_id` bigint(20) UNSIGNED NOT NULL,
  `required_level` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `curricula`
--

CREATE TABLE `curricula` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year_start` int(11) NOT NULL,
  `year_end` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `curricula`
--

INSERT INTO `curricula` (`id`, `name`, `active`, `year_start`, `year_end`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Kurikulum 2016', 'no', 2016, 2021, 'kurikulum lama', '2022-06-12 12:34:42', '2022-06-12 12:34:42'),
(2, 'Kurikulum 2021', 'yes', 2021, 2026, 'Kurikulum baru', '2022-06-12 12:34:15', '2022-06-12 12:34:15');

-- --------------------------------------------------------

--
-- Struktur dari tabel `curriculum_los`
--

CREATE TABLE `curriculum_los` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `curriculum_id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` int(11) NOT NULL DEFAULT 1,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `curriculum_los`
--

INSERT INTO `curriculum_los` (`id`, `curriculum_id`, `code`, `name`, `type`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, 'CP-1', 'Mengidentifikasi, memformulasikan dan memecahkan permasalahan kebutuhan informasi dari suatu organisasi', 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `curriculum_profiles`
--

CREATE TABLE `curriculum_profiles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `curriculum_id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `lecturers`
--

CREATE TABLE `lecturers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reg_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `lecturers`
--

INSERT INTO `lecturers` (`id`, `name`, `reg_id`, `phone`, `status`, `created_at`, `updated_at`) VALUES
(2, 'Husnil Kamil', '198201182008121002', '081363491004', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(3, 'Hasdi Putra', '198307272008121003', '081363390627', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(4, 'Fajril Akbar', '198001102008121002', '085220229350', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(5, 'Surya Afnarius', '196404091995121001', '081210232425', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(6, 'Meza Silvana', '198103252008122003', '081363310161', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(7, 'Ricky Akbar', '198410062012121001', '085263098489', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(8, 'Haris Suryamen', '197503232012121001', '081366387648', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(9, 'Wahyudi', '198105052014041001', '085271869761', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(547, 'Alizar Hasan', '195312181980031002', '-', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(548, 'Syafii', '197405051998021001', '-', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(550, 'Hafid Yoza Putra', '1308051406930001', '-', 4, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(551, 'Rahmatika Pratama Santi', '1371085508930003', '-', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(552, 'Difana Meilani', '198005252005012005', '081317044255', 3, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(553, 'Darwison', '196409141995121001', '-', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(554, 'Rahmat Hidayat', '197804152000121002', '-', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(555, 'Darmawan', '197708162005011002', '-', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(559, 'Jefril Rahmadoni', '198904152019031009', '085278911989', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(560, 'Afriyanti Dwi Kartika', '198904212019032024', '081363592144', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(561, 'Ullya Mega Wahyuni', '199011032019032008', '082388776117', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(562, 'Dwi Welly Sukma Nirad', '199108122019032018', '087792350245', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(563, 'Adi Arga Arifnur', '199208202019031005', '083181528152', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(564, 'Hafizah Hanim', '199309292019032022', '082385912660', 1, '2022-03-25 00:43:20', '2022-03-25 00:43:20');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_03_18_154920_create_permission_tables', 1),
(5, '2022_03_02_205828_create_lecturers_table', 1),
(6, '2022_03_02_205829_create_curricula_table', 1),
(7, '2022_03_02_205830_create_curriculum_profiles_table', 1),
(8, '2022_03_02_205831_create_curriculum_los_table', 1),
(9, '2022_03_02_205832_create_courses_table', 1),
(10, '2022_03_02_205833_create_course_requirements_table', 1),
(11, '2022_03_02_205834_create_course_plans_table', 1),
(12, '2022_03_02_205835_create_course_plan_references_table', 1),
(13, '2022_03_02_205836_create_course_plan_assessments_table', 1),
(14, '2022_03_02_205837_create_course_plan_details_table', 1),
(15, '2022_03_02_205838_create_course_los_table', 1),
(16, '2022_03_02_205839_create_course_lo_details_table', 1),
(17, '2022_03_02_205840_create_course_plan_detail_outcomes_table', 1),
(18, '2022_03_02_205841_create_course_plan_detail_refs_table', 1),
(19, '2022_03_02_205842_create_course_plan_detail_assessments_table', 1),
(20, '2022_03_02_205843_create_course_plan_lecturers_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('M','D','T') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `type`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@unand.ac.id', '2022-06-27 20:29:36', '$2b$10$0QNzlWWdSwTVJP0NZIKTGeRcpxSm0p0k5l1pLt8kC502LlJuac8Gu', NULL, 'T', NULL, '2022-06-27 20:46:26'),
(2, 'Husnil Kamil', '198201182008121002@unand.ac.id', '2022-06-27 21:05:07', '$2b$10$5roDRuCOTXkzIi4btl/kueyiMfoma/G2L862SxpISNmGi/BixaoBC', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidHlwZSI6IkQiLCJpYXQiOjE2NTYzNjM5MDcsImV4cCI6MTY1NjY', 'D', '2022-03-25 00:43:20', '2022-06-27 20:46:14'),
(3, 'Hasdi Putra', '198307272008121003@unand.ac.id', '2022-06-27 16:23:07', '$2b$10$5roDRuCOTXkzIi4btl/kueyiMfoma/G2L862SxpISNmGi/BixaoBC', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidHlwZSI6IkQiLCJpYXQiOjE2NTYzNDY5ODcsImV4cCI6MTY1NjY', 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(4, 'Fajril Akbar', '198001102008121002@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(5, 'Surya Afnarius', '196404091995121001@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(6, 'Meza Silvana', '198103252008122003@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(7, 'Ricky Akbar', '198410062012121001@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(8, 'Haris Suryamen', '197503232012121001@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(9, 'Wahyudi', '198105052014041001@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(547, 'Alizar Hasan', '195312181980031002@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(548, 'Syafii', '197405051998021001@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(550, 'Hafid Yoza Putra', '1308051406930001@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(551, 'Rahmatika Pratama Santi', '1371085508930003@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(552, 'Difana Meilani', '198005252005012005@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(553, 'Darwison', '196409141995121001@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(554, 'Rahmat Hidayat', '197804152000121002@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(555, 'Darmawan', '197708162005011002@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(559, 'Jefril Rahmadoni', '198904152019031009@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(560, 'Afriyanti Dwi Kartika', '198904212019032024@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(561, 'Ullya Mega Wahyuni', '199011032019032008@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(562, 'Dwi Welly Sukma Nirad', '199108122019032018@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(563, 'Adi Arga Arifnur', '199208202019031005@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(564, 'Hafizah Hanim', '199309292019032022@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courses_curriculum_id_foreign` (`curriculum_id`);

--
-- Indeks untuk tabel `course_los`
--
ALTER TABLE `course_los`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_los_course_plan_id_foreign` (`course_plan_id`),
  ADD KEY `course_los_parent_id_foreign` (`parent_id`);

--
-- Indeks untuk tabel `course_lo_details`
--
ALTER TABLE `course_lo_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_lo_details_curriculum_lo_id_foreign` (`curriculum_lo_id`),
  ADD KEY `course_lo_details_course_lo_id_foreign` (`course_lo_id`);

--
-- Indeks untuk tabel `course_plans`
--
ALTER TABLE `course_plans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_plans_course_id_foreign` (`course_id`),
  ADD KEY `course_plans_created_by_foreign` (`created_by`),
  ADD KEY `course_plans_validated_by_foreign` (`validated_by`);

--
-- Indeks untuk tabel `course_plan_assessments`
--
ALTER TABLE `course_plan_assessments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_plan_assessments_course_plan_id_foreign` (`course_plan_id`);

--
-- Indeks untuk tabel `course_plan_details`
--
ALTER TABLE `course_plan_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_plan_details_course_plan_id_foreign` (`course_plan_id`);

--
-- Indeks untuk tabel `course_plan_detail_assessments`
--
ALTER TABLE `course_plan_detail_assessments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_plan_detail_assessments_course_plan_detail_id_foreign` (`course_plan_detail_id`),
  ADD KEY `course_plan_detail_assessments_course_plan_assessment_id_foreign` (`course_plan_assessment_id`);

--
-- Indeks untuk tabel `course_plan_detail_outcomes`
--
ALTER TABLE `course_plan_detail_outcomes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_plan_detail_outcomes_course_plan_detail_id_foreign` (`course_plan_detail_id`),
  ADD KEY `course_plan_detail_outcomes_course_lo_id_foreign` (`course_lo_id`);

--
-- Indeks untuk tabel `course_plan_detail_refs`
--
ALTER TABLE `course_plan_detail_refs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_plan_detail_refs_course_plan_detail_id_foreign` (`course_plan_detail_id`),
  ADD KEY `course_plan_detail_refs_course_plan_reference_id_foreign` (`course_plan_reference_id`);

--
-- Indeks untuk tabel `course_plan_lecturers`
--
ALTER TABLE `course_plan_lecturers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_plan_lecturers_course_plan_id_foreign` (`course_plan_id`),
  ADD KEY `course_plan_lecturers_lecturer_id_foreign` (`lecturer_id`);

--
-- Indeks untuk tabel `course_plan_references`
--
ALTER TABLE `course_plan_references`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_plan_references_course_plan_id_foreign` (`course_plan_id`);

--
-- Indeks untuk tabel `course_requirements`
--
ALTER TABLE `course_requirements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_requirements_course_id_foreign` (`course_id`),
  ADD KEY `course_requirements_required_course_id_foreign` (`required_course_id`);

--
-- Indeks untuk tabel `curricula`
--
ALTER TABLE `curricula`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `curriculum_los`
--
ALTER TABLE `curriculum_los`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curriculum_los_curriculum_id_foreign` (`curriculum_id`);

--
-- Indeks untuk tabel `curriculum_profiles`
--
ALTER TABLE `curriculum_profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curriculum_profiles_curriculum_id_foreign` (`curriculum_id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `lecturers`
--
ALTER TABLE `lecturers`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indeks untuk tabel `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indeks untuk tabel `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indeks untuk tabel `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indeks untuk tabel `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT untuk tabel `course_los`
--
ALTER TABLE `course_los`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `course_lo_details`
--
ALTER TABLE `course_lo_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `course_plans`
--
ALTER TABLE `course_plans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT untuk tabel `course_plan_assessments`
--
ALTER TABLE `course_plan_assessments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `course_plan_details`
--
ALTER TABLE `course_plan_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `course_plan_detail_assessments`
--
ALTER TABLE `course_plan_detail_assessments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `course_plan_detail_outcomes`
--
ALTER TABLE `course_plan_detail_outcomes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `course_plan_detail_refs`
--
ALTER TABLE `course_plan_detail_refs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `course_plan_lecturers`
--
ALTER TABLE `course_plan_lecturers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `course_plan_references`
--
ALTER TABLE `course_plan_references`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `course_requirements`
--
ALTER TABLE `course_requirements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `curricula`
--
ALTER TABLE `curricula`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `curriculum_los`
--
ALTER TABLE `curriculum_los`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `curriculum_profiles`
--
ALTER TABLE `curriculum_profiles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7053;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_curriculum_id_foreign` FOREIGN KEY (`curriculum_id`) REFERENCES `curricula` (`id`);

--
-- Ketidakleluasaan untuk tabel `course_los`
--
ALTER TABLE `course_los`
  ADD CONSTRAINT `course_los_course_plan_id_foreign` FOREIGN KEY (`course_plan_id`) REFERENCES `course_plans` (`id`),
  ADD CONSTRAINT `course_los_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `course_los` (`id`);

--
-- Ketidakleluasaan untuk tabel `course_lo_details`
--
ALTER TABLE `course_lo_details`
  ADD CONSTRAINT `course_lo_details_course_lo_id_foreign` FOREIGN KEY (`course_lo_id`) REFERENCES `course_los` (`id`),
  ADD CONSTRAINT `course_lo_details_curriculum_lo_id_foreign` FOREIGN KEY (`curriculum_lo_id`) REFERENCES `curriculum_los` (`id`);

--
-- Ketidakleluasaan untuk tabel `course_plans`
--
ALTER TABLE `course_plans`
  ADD CONSTRAINT `course_plans_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
  ADD CONSTRAINT `course_plans_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `created_bies` (`id`),
  ADD CONSTRAINT `course_plans_validated_by_foreign` FOREIGN KEY (`validated_by`) REFERENCES `validated_bies` (`id`);

--
-- Ketidakleluasaan untuk tabel `course_plan_assessments`
--
ALTER TABLE `course_plan_assessments`
  ADD CONSTRAINT `course_plan_assessments_course_plan_id_foreign` FOREIGN KEY (`course_plan_id`) REFERENCES `course_plans` (`id`);

--
-- Ketidakleluasaan untuk tabel `course_plan_details`
--
ALTER TABLE `course_plan_details`
  ADD CONSTRAINT `course_plan_details_course_plan_id_foreign` FOREIGN KEY (`course_plan_id`) REFERENCES `course_plans` (`id`);

--
-- Ketidakleluasaan untuk tabel `course_plan_detail_assessments`
--
ALTER TABLE `course_plan_detail_assessments`
  ADD CONSTRAINT `course_plan_detail_assessments_course_plan_assessment_id_foreign` FOREIGN KEY (`course_plan_assessment_id`) REFERENCES `course_plan_assessments` (`id`),
  ADD CONSTRAINT `course_plan_detail_assessments_course_plan_detail_id_foreign` FOREIGN KEY (`course_plan_detail_id`) REFERENCES `course_plan_details` (`id`);

--
-- Ketidakleluasaan untuk tabel `course_plan_detail_outcomes`
--
ALTER TABLE `course_plan_detail_outcomes`
  ADD CONSTRAINT `course_plan_detail_outcomes_course_lo_id_foreign` FOREIGN KEY (`course_lo_id`) REFERENCES `course_los` (`id`),
  ADD CONSTRAINT `course_plan_detail_outcomes_course_plan_detail_id_foreign` FOREIGN KEY (`course_plan_detail_id`) REFERENCES `course_plan_details` (`id`);

--
-- Ketidakleluasaan untuk tabel `course_plan_detail_refs`
--
ALTER TABLE `course_plan_detail_refs`
  ADD CONSTRAINT `course_plan_detail_refs_course_plan_detail_id_foreign` FOREIGN KEY (`course_plan_detail_id`) REFERENCES `course_plan_details` (`id`),
  ADD CONSTRAINT `course_plan_detail_refs_course_plan_reference_id_foreign` FOREIGN KEY (`course_plan_reference_id`) REFERENCES `course_plan_references` (`id`);

--
-- Ketidakleluasaan untuk tabel `course_plan_lecturers`
--
ALTER TABLE `course_plan_lecturers`
  ADD CONSTRAINT `course_plan_lecturers_course_plan_id_foreign` FOREIGN KEY (`course_plan_id`) REFERENCES `course_plans` (`id`),
  ADD CONSTRAINT `course_plan_lecturers_lecturer_id_foreign` FOREIGN KEY (`lecturer_id`) REFERENCES `lecturers` (`id`);

--
-- Ketidakleluasaan untuk tabel `course_plan_references`
--
ALTER TABLE `course_plan_references`
  ADD CONSTRAINT `course_plan_references_course_plan_id_foreign` FOREIGN KEY (`course_plan_id`) REFERENCES `course_plans` (`id`);

--
-- Ketidakleluasaan untuk tabel `course_requirements`
--
ALTER TABLE `course_requirements`
  ADD CONSTRAINT `course_requirements_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
  ADD CONSTRAINT `course_requirements_required_course_id_foreign` FOREIGN KEY (`required_course_id`) REFERENCES `courses` (`id`);

--
-- Ketidakleluasaan untuk tabel `curriculum_los`
--
ALTER TABLE `curriculum_los`
  ADD CONSTRAINT `curriculum_los_curriculum_id_foreign` FOREIGN KEY (`curriculum_id`) REFERENCES `curricula` (`id`);

--
-- Ketidakleluasaan untuk tabel `curriculum_profiles`
--
ALTER TABLE `curriculum_profiles`
  ADD CONSTRAINT `curriculum_profiles_curriculum_id_foreign` FOREIGN KEY (`curriculum_id`) REFERENCES `curricula` (`id`);

--
-- Ketidakleluasaan untuk tabel `lecturers`
--
ALTER TABLE `lecturers`
  ADD CONSTRAINT `lecturers_id_foreign` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
