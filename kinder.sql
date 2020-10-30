-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Окт 30 2020 г., 09:01
-- Версия сервера: 8.0.21
-- Версия PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `kinder`
--

-- --------------------------------------------------------

--
-- Структура таблицы `achieves`
--

CREATE TABLE `achieves` (
  `id` bigint UNSIGNED NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` enum('boy','girl') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `achieves`
--

INSERT INTO `achieves` (`id`, `value`, `gender`, `created_at`, `updated_at`) VALUES
(1, 'Пошёл в детский сад.', 'boy', NULL, '2020-10-29 15:42:22'),
(2, 'Пошёл в первый класс.', 'boy', NULL, NULL),
(3, 'Научился считать.', 'boy', NULL, NULL),
(4, 'Прочитал первую книгу.', 'boy', NULL, NULL),
(5, 'Прочитал много книг.', 'boy', NULL, NULL),
(6, 'Научился кататься на велосипеде.', 'boy', NULL, NULL),
(7, 'Научился кататься на коньках.', 'boy', NULL, NULL),
(8, 'Научился кататься на лыжах.', 'boy', NULL, NULL),
(9, 'Научился кататься на роликах.', 'boy', NULL, NULL),
(10, 'Участвовал в спортивных соревнованиях.', 'boy', NULL, NULL),
(11, 'Выиграл в спортивных соревнованиях.', 'boy', NULL, NULL),
(12, 'Выучил таблицу умножения.', 'boy', NULL, NULL),
(13, 'Выучил первое стихотворение.', 'boy', NULL, NULL),
(14, 'Замечательно закончил четверть.', 'boy', NULL, NULL),
(15, 'Начал играть на музыкальном инструменте.', 'boy', NULL, NULL),
(16, 'Научился плавать.', 'boy', NULL, NULL),
(17, 'Начал заниматься в спортивной секции.', 'boy', NULL, NULL),
(18, 'Начал заниматься танцами.', 'boy', NULL, NULL),
(19, 'Появился домашний питомец.', 'boy', NULL, NULL),
(20, 'Научился готовить.', 'boy', NULL, NULL),
(21, 'Начал заниматься пением.', 'boy', NULL, NULL),
(22, 'Выиграл школьную олимпиаду.', 'boy', NULL, NULL),
(23, 'Участвовал в школьной олимпиаде.', 'boy', NULL, NULL),
(24, 'Начал заниматься в театральном кружке.', 'boy', NULL, NULL),
(25, 'Пошла в детский сад.', 'girl', NULL, NULL),
(26, 'Пошла в первый класс.', 'girl', NULL, NULL),
(27, 'Научилась считать.', 'girl', NULL, NULL),
(28, 'Прочитала первую книгу.', 'girl', NULL, NULL),
(29, 'Прочитала много книг.', 'girl', NULL, NULL),
(30, 'Научилась кататься на велосипеде.', 'girl', NULL, NULL),
(31, 'Научилась кататься на коньках.', 'girl', NULL, NULL),
(32, 'Научилась кататься на лыжах.', 'girl', NULL, NULL),
(33, 'Научилась кататься на роликах.', 'girl', NULL, NULL),
(34, 'Участвовала в спортивных соревнованиях.', 'girl', NULL, NULL),
(35, 'Выиграла в спортивных соревнованиях.', 'girl', NULL, NULL),
(36, 'Выучила таблицу умножения.', 'girl', NULL, NULL),
(37, 'Выучила первое стихотворение.', 'girl', NULL, NULL),
(38, 'Замечательно закончила четверть.', 'girl', NULL, NULL),
(39, 'Начала играть на музыкальном инструменте.', 'girl', NULL, NULL),
(40, 'Научилась плавать.', 'girl', NULL, NULL),
(41, 'Начала заниматься в спортивной секции.', 'girl', NULL, NULL),
(42, 'Начала заниматься танцами.', 'girl', NULL, NULL),
(44, 'Появился домашний питомец.', 'girl', NULL, NULL),
(45, 'Научилась готовить.', 'girl', NULL, NULL),
(46, 'Начала заниматься пением.', 'girl', NULL, NULL),
(47, 'Выиграла школьную олимпиаду.', 'girl', NULL, NULL),
(48, 'Участвовала в школьной олимпиаде.', 'girl', NULL, NULL),
(49, 'Начала заниматься в театральном кружке.', 'girl', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `boys`
--

CREATE TABLE `boys` (
  `id` bigint UNSIGNED NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `boys`
--

INSERT INTO `boys` (`id`, `value`, `created_at`, `updated_at`) VALUES
(1, 'Адам', NULL, '2020-10-29 16:01:16'),
(2, 'Адиль', NULL, NULL),
(3, 'Азамат', NULL, NULL),
(4, 'Азатик', NULL, NULL),
(5, 'Айдарка', NULL, NULL),
(6, 'Али', NULL, NULL),
(7, 'Алим', NULL, NULL),
(8, 'Альберт', NULL, NULL),
(9, 'Аман', NULL, NULL),
(10, 'Амин', NULL, NULL),
(11, 'Амир', NULL, NULL),
(12, 'Андрюша', NULL, NULL),
(13, 'Анзор', NULL, NULL),
(14, 'Антоша', NULL, NULL),
(15, 'Арам', NULL, NULL),
(16, 'Аркаша', NULL, NULL),
(17, 'Армен', NULL, NULL),
(18, 'Арсен', NULL, NULL),
(19, 'Артур', NULL, NULL),
(20, 'Аслан', NULL, NULL),
(21, 'Астемыр', NULL, NULL),
(22, 'Афоня', NULL, NULL),
(23, 'Ахмат', NULL, NULL),
(24, 'Ахмед', NULL, NULL),
(25, 'Ашот', NULL, NULL),
(26, 'Бахтияр', NULL, NULL),
(27, 'Богдаша', NULL, NULL),
(28, 'Боречка', NULL, NULL),
(29, 'Булат', NULL, NULL),
(30, 'Вадимка', NULL, NULL),
(31, 'Валерочка', NULL, NULL),
(32, 'Валечка', NULL, NULL),
(33, 'Ванечка', NULL, NULL),
(34, 'Васечка', NULL, NULL),
(35, 'Вильдан', NULL, NULL),
(36, 'Виталик', NULL, NULL),
(37, 'Витечка', NULL, NULL),
(38, 'Владик', NULL, NULL),
(39, 'Вовочка', NULL, NULL),
(40, 'Гаврюша', NULL, NULL),
(41, 'Гарри', NULL, NULL),
(42, 'Гамлет', NULL, NULL),
(43, 'Гаяз', NULL, NULL),
(44, 'Геночка', NULL, NULL),
(45, 'Герман', NULL, NULL),
(46, 'Глебушка', NULL, NULL),
(47, 'Гордеюшка', NULL, NULL),
(48, 'Гошенька', NULL, NULL),
(49, 'Гришенька', NULL, NULL),
(50, 'Давид', NULL, NULL),
(51, 'Дамир', NULL, NULL),
(52, 'Данечка', NULL, NULL),
(53, 'Данияр', NULL, NULL),
(54, 'Дарим', NULL, NULL),
(55, 'Даян', NULL, NULL),
(56, 'Демид', NULL, NULL),
(57, 'Дениска', NULL, NULL),
(58, 'Джамиль', NULL, NULL),
(59, 'Димочка', NULL, NULL),
(60, 'Добрыня', NULL, NULL),
(61, 'Дорджи', NULL, NULL),
(62, 'Дорофеюшка', NULL, NULL),
(63, 'Евсеюшка', NULL, NULL),
(64, 'Егорка', NULL, NULL),
(65, 'Елисеюшка', NULL, NULL),
(66, 'Ёся', NULL, NULL),
(67, 'Ефимка', NULL, NULL),
(68, 'Ждан', NULL, NULL),
(69, 'Женечка', NULL, NULL),
(70, 'Захарчик', NULL, NULL),
(71, 'Ибрагим', NULL, NULL),
(72, 'Игорь', NULL, NULL),
(73, 'Ильдан', NULL, NULL),
(74, 'Ильдарушка', NULL, NULL),
(75, 'Ильнур', NULL, NULL),
(76, 'Ильхам', NULL, NULL),
(77, 'Илюшка', NULL, NULL),
(78, 'Имран', NULL, NULL),
(79, 'Иналь', NULL, NULL),
(80, 'Ислам', NULL, NULL),
(81, 'Камиль', NULL, NULL),
(82, 'Кантемир', NULL, NULL),
(83, 'Карим', NULL, NULL),
(84, 'Кеша', NULL, NULL),
(85, 'Кирюша', NULL, NULL),
(86, 'Климушка', NULL, NULL),
(87, 'Коленька', NULL, NULL),
(88, 'Костенька', NULL, NULL),
(89, 'Кузя', NULL, NULL),
(90, 'Левушка', NULL, NULL),
(91, 'Лёня', NULL, NULL),
(92, 'Лешенька', NULL, NULL),
(93, 'Магомед', NULL, NULL),
(94, 'Максимка', NULL, NULL),
(95, 'Маратик', NULL, NULL),
(96, 'Марк', NULL, NULL),
(97, 'Матвей', NULL, NULL),
(98, 'Мирон', NULL, NULL),
(99, 'Мишенька', NULL, NULL),
(100, 'Муслим', NULL, NULL),
(101, 'Назарчик', NULL, NULL),
(102, 'Наиль', NULL, NULL),
(103, 'Никитка', NULL, NULL),
(104, 'Олежка', NULL, NULL),
(105, 'Пашенька', NULL, NULL),
(106, 'Петечка', NULL, NULL),
(107, 'Платоша', NULL, NULL),
(108, 'Потап', NULL, NULL),
(109, 'Прохор', NULL, NULL),
(110, 'Радик', NULL, NULL),
(111, 'Рамиль', NULL, NULL),
(112, 'Рашитик', NULL, NULL),
(113, 'Ренатик', NULL, NULL),
(114, 'Риналь', NULL, NULL),
(115, 'Роберт', NULL, NULL),
(116, 'Родион', NULL, NULL),
(117, 'Ромочка', NULL, NULL),
(118, 'Руслан', NULL, NULL),
(119, 'Рустамчик', NULL, NULL),
(120, 'Рустэмчик', NULL, NULL),
(121, 'Сава', NULL, NULL),
(122, 'Самвел', NULL, NULL),
(123, 'Санечка', NULL, NULL),
(124, 'Святослав', NULL, NULL),
(125, 'Сева', NULL, NULL),
(126, 'Сема', NULL, NULL),
(127, 'Сеня', NULL, NULL),
(128, 'Сереженька', NULL, NULL),
(129, 'Славик', NULL, NULL),
(130, 'Стасик', NULL, NULL),
(131, 'Степочка', NULL, NULL),
(132, 'Султанчик', NULL, NULL),
(133, 'Тарасик', NULL, NULL),
(134, 'Тарлан', NULL, NULL),
(135, 'Тема', NULL, NULL),
(136, 'Тигран', NULL, NULL),
(137, 'Тима', NULL, NULL),
(138, 'Тимур', NULL, NULL),
(139, 'Толечка', NULL, NULL),
(140, 'Трофимушка', NULL, NULL),
(141, 'Фарид', NULL, NULL),
(142, 'Федечка', NULL, NULL),
(143, 'Филя', NULL, NULL),
(144, 'Хабиб', NULL, NULL),
(145, 'Харитоша', NULL, NULL),
(146, 'Шамиль', NULL, NULL),
(147, 'Эдгарс', NULL, NULL),
(148, 'Эдик', NULL, NULL),
(149, 'Эльдар', NULL, NULL),
(150, 'Эрнест', NULL, NULL),
(151, 'Юлик', NULL, NULL),
(152, 'Юрочка', NULL, NULL),
(153, 'Явдат', NULL, NULL),
(154, 'Ян', NULL, NULL),
(155, 'Ярик', NULL, NULL),
(156, 'Яша', NULL, NULL),
(157, 'Внучок', NULL, NULL),
(158, 'Дружок', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `data_rows`
--

CREATE TABLE `data_rows` (
  `id` int UNSIGNED NOT NULL,
  `data_type_id` int UNSIGNED NOT NULL,
  `field` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `required` tinyint(1) NOT NULL DEFAULT '0',
  `browse` tinyint(1) NOT NULL DEFAULT '1',
  `read` tinyint(1) NOT NULL DEFAULT '1',
  `edit` tinyint(1) NOT NULL DEFAULT '1',
  `add` tinyint(1) NOT NULL DEFAULT '1',
  `delete` tinyint(1) NOT NULL DEFAULT '1',
  `details` text COLLATE utf8mb4_unicode_ci,
  `order` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `data_rows`
--

INSERT INTO `data_rows` (`id`, `data_type_id`, `field`, `type`, `display_name`, `required`, `browse`, `read`, `edit`, `add`, `delete`, `details`, `order`) VALUES
(1, 1, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(2, 1, 'name', 'text', 'Name', 1, 1, 1, 1, 1, 1, NULL, 2),
(3, 1, 'email', 'text', 'Email', 1, 1, 1, 1, 1, 1, NULL, 3),
(4, 1, 'password', 'password', 'Password', 1, 0, 0, 1, 1, 0, NULL, 4),
(5, 1, 'remember_token', 'text', 'Remember Token', 0, 0, 0, 0, 0, 0, NULL, 5),
(6, 1, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 0, NULL, 6),
(7, 1, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 7),
(8, 1, 'avatar', 'image', 'Avatar', 0, 1, 1, 1, 1, 1, NULL, 8),
(9, 1, 'user_belongsto_role_relationship', 'relationship', 'Role', 0, 1, 1, 1, 1, 0, '{\"model\":\"TCG\\\\Voyager\\\\Models\\\\Role\",\"table\":\"roles\",\"type\":\"belongsTo\",\"column\":\"role_id\",\"key\":\"id\",\"label\":\"display_name\",\"pivot_table\":\"roles\",\"pivot\":0}', 10),
(10, 1, 'user_belongstomany_role_relationship', 'relationship', 'Roles', 0, 1, 1, 1, 1, 0, '{\"model\":\"TCG\\\\Voyager\\\\Models\\\\Role\",\"table\":\"roles\",\"type\":\"belongsToMany\",\"column\":\"id\",\"key\":\"id\",\"label\":\"display_name\",\"pivot_table\":\"user_roles\",\"pivot\":\"1\",\"taggable\":\"0\"}', 11),
(11, 1, 'settings', 'hidden', 'Settings', 0, 0, 0, 0, 0, 0, NULL, 12),
(12, 2, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(13, 2, 'name', 'text', 'Name', 1, 1, 1, 1, 1, 1, NULL, 2),
(14, 2, 'created_at', 'timestamp', 'Created At', 0, 0, 0, 0, 0, 0, NULL, 3),
(15, 2, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 4),
(16, 3, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(17, 3, 'name', 'text', 'Name', 1, 1, 1, 1, 1, 1, NULL, 2),
(18, 3, 'created_at', 'timestamp', 'Created At', 0, 0, 0, 0, 0, 0, NULL, 3),
(19, 3, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 4),
(20, 3, 'display_name', 'text', 'Display Name', 1, 1, 1, 1, 1, 1, NULL, 5),
(21, 1, 'role_id', 'text', 'Role', 1, 1, 1, 1, 1, 1, NULL, 9),
(22, 5, 'id', 'text', 'Id', 1, 0, 0, 0, 0, 0, '{}', 1),
(23, 5, 'title', 'text', 'Title', 1, 1, 1, 1, 1, 1, '{}', 2),
(24, 5, 'img', 'image', 'Img', 0, 1, 1, 1, 1, 1, '{}', 3),
(25, 5, 'description', 'rich_text_box', 'Description', 0, 1, 1, 1, 1, 1, '{}', 4),
(26, 5, 'toys', 'multiple_images', 'Toys', 0, 1, 1, 1, 1, 1, '{}', 5),
(27, 5, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 1, 0, 1, '{}', 6),
(28, 5, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, '{}', 7),
(29, 6, 'id', 'text', 'Id', 1, 0, 0, 0, 0, 0, '{}', 1),
(30, 6, 'value', 'text', 'Value', 1, 1, 1, 1, 1, 1, '{}', 2),
(31, 6, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 1, 0, 1, '{}', 3),
(32, 6, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, '{}', 4),
(33, 7, 'id', 'text', 'Id', 1, 0, 0, 0, 0, 0, '{}', 1),
(34, 7, 'value', 'text', 'Value', 1, 1, 1, 1, 1, 1, '{}', 2),
(35, 7, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 1, 0, 1, '{}', 3),
(36, 7, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, '{}', 4),
(37, 8, 'id', 'text', 'Id', 1, 0, 0, 0, 0, 0, '{}', 1),
(38, 8, 'value', 'text', 'Value', 1, 1, 1, 1, 1, 1, '{}', 2),
(39, 8, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 1, 0, 1, '{}', 3),
(40, 8, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, '{}', 4),
(41, 9, 'id', 'text', 'Id', 1, 0, 0, 0, 0, 0, '{}', 1),
(42, 9, 'value', 'text', 'Value', 1, 1, 1, 1, 1, 1, '{}', 2),
(43, 9, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 1, 0, 1, '{}', 3),
(44, 9, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, '{}', 4),
(45, 11, 'id', 'text', 'Id', 1, 0, 0, 0, 0, 0, '{}', 1),
(46, 11, 'value', 'text', 'Value', 1, 1, 1, 1, 1, 1, '{}', 2),
(47, 11, 'gender', 'radio_btn', 'Gender', 1, 1, 1, 1, 1, 1, '{\"options\":{\"boy\":\"\\u0414\\u043b\\u044f \\u043c\\u0430\\u043b\\u044c\\u0447\\u0438\\u043a\\u0430\",\"girl\":\"\\u0414\\u043b\\u044f \\u0434\\u0435\\u0432\\u043e\\u0447\\u043a\\u0438\"},\"default\":\"boy\"}', 3),
(48, 11, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 1, 0, 1, '{}', 4),
(49, 11, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, '{}', 5),
(50, 12, 'id', 'text', 'Id', 1, 0, 0, 0, 0, 0, '{}', 1),
(51, 12, 'name_id', 'text', 'Имя', 0, 0, 0, 1, 1, 1, '{}', 2),
(52, 12, 'age', 'text', 'Возраст', 0, 0, 0, 1, 1, 1, '{}', 3),
(53, 12, 'achieve_id', 'text', 'Достижение', 0, 0, 0, 1, 1, 1, '{}', 4),
(54, 12, 'hobby_id', 'text', 'Хобби', 0, 0, 0, 1, 1, 1, '{}', 5),
(55, 12, 'from_id', 'text', 'От кого', 0, 0, 1, 1, 1, 1, '{}', 6),
(56, 12, 'email', 'text', 'Email', 0, 1, 1, 1, 1, 1, '{}', 7),
(57, 12, 'gift_id', 'text', 'Подарок', 0, 0, 0, 1, 1, 1, '{}', 8),
(58, 12, 'photo', 'text', 'Фото', 0, 0, 0, 1, 1, 1, '{}', 9),
(59, 12, 'hash', 'text', 'Hash', 0, 0, 0, 0, 0, 0, '{}', 10),
(60, 12, 'email_hash', 'text', 'Email Hash', 0, 0, 0, 0, 0, 0, '{}', 11),
(61, 12, 'confirmed', 'text', 'Подтвержден', 0, 1, 1, 1, 1, 1, '{}', 12);

-- --------------------------------------------------------

--
-- Структура таблицы `data_types`
--

CREATE TABLE `data_types` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name_singular` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name_plural` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `model_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `policy_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `controller` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `generate_permissions` tinyint(1) NOT NULL DEFAULT '0',
  `server_side` tinyint NOT NULL DEFAULT '0',
  `details` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `data_types`
--

INSERT INTO `data_types` (`id`, `name`, `slug`, `display_name_singular`, `display_name_plural`, `icon`, `model_name`, `policy_name`, `controller`, `description`, `generate_permissions`, `server_side`, `details`, `created_at`, `updated_at`) VALUES
(1, 'users', 'users', 'User', 'Users', 'voyager-person', 'TCG\\Voyager\\Models\\User', 'TCG\\Voyager\\Policies\\UserPolicy', 'TCG\\Voyager\\Http\\Controllers\\VoyagerUserController', '', 1, 0, NULL, '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(2, 'menus', 'menus', 'Menu', 'Menus', 'voyager-list', 'TCG\\Voyager\\Models\\Menu', NULL, '', '', 1, 0, NULL, '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(3, 'roles', 'roles', 'Role', 'Roles', 'voyager-lock', 'TCG\\Voyager\\Models\\Role', NULL, 'TCG\\Voyager\\Http\\Controllers\\VoyagerRoleController', '', 1, 0, NULL, '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(5, 'gifts', 'gifts', 'Gift', 'Gifts', NULL, 'App\\Models\\Gift', NULL, NULL, NULL, 1, 0, '{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null}', '2020-10-29 14:15:49', '2020-10-29 14:15:49'),
(6, 'boys', 'boys', 'Boy', 'Boys', NULL, 'App\\Models\\Boy', NULL, NULL, NULL, 1, 0, '{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null}', '2020-10-29 14:40:03', '2020-10-29 14:40:03'),
(7, 'froms', 'froms', 'From', 'Froms', NULL, 'App\\Models\\From', NULL, NULL, NULL, 1, 0, '{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null}', '2020-10-29 14:40:13', '2020-10-29 14:40:13'),
(8, 'girls', 'girls', 'Girl', 'Girls', NULL, 'App\\Models\\Girl', NULL, NULL, NULL, 1, 0, '{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null}', '2020-10-29 14:40:30', '2020-10-29 14:40:30'),
(9, 'hobbies', 'hobbies', 'Hobby', 'Hobbies', NULL, 'App\\Models\\Hobby', NULL, NULL, NULL, 1, 0, '{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null}', '2020-10-29 14:40:38', '2020-10-29 14:40:38'),
(11, 'achieves', 'achieves', 'Achieve', 'Achieves', NULL, 'App\\Models\\Achieve', NULL, NULL, NULL, 1, 0, '{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null}', '2020-10-29 14:43:25', '2020-10-29 14:43:25'),
(12, 'orders', 'orders', 'Заявка', 'Заявки', 'voyager-list', 'App\\Models\\Order', NULL, NULL, NULL, 1, 1, '{\"order_column\":\"email\",\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null,\"scope\":null}', '2020-10-29 14:53:26', '2020-10-29 15:03:32');

-- --------------------------------------------------------

--
-- Структура таблицы `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `froms`
--

CREATE TABLE `froms` (
  `id` bigint UNSIGNED NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `froms`
--

INSERT INTO `froms` (`id`, `value`, `created_at`, `updated_at`) VALUES
(1, 'Родители', NULL, '2020-10-29 15:42:33'),
(2, 'Мама', NULL, NULL),
(3, 'Папа', NULL, NULL),
(4, 'Бабушка', NULL, NULL),
(5, 'Дедушка', NULL, NULL),
(6, 'Бабушка и дедушка', NULL, NULL),
(7, 'Сестра', NULL, NULL),
(8, 'Брат', NULL, NULL),
(9, 'Тётя', NULL, NULL),
(10, 'Дядя', NULL, NULL),
(11, 'Дядя и тётя', NULL, NULL),
(12, 'Учитель', NULL, NULL),
(13, 'Родственники', NULL, NULL),
(14, 'Друзья', NULL, NULL),
(15, 'Друг', NULL, NULL),
(16, 'Крёстные', NULL, NULL),
(17, 'Крёстный', NULL, NULL),
(18, 'Крёстная', NULL, NULL),
(19, 'Воспитатель', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `gifts`
--

CREATE TABLE `gifts` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `toys` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `gifts`
--

INSERT INTO `gifts` (`id`, `title`, `img`, `description`, `toys`, `created_at`, `updated_at`) VALUES
(1, 'Набор кондитерских изделий Kinder® Maxi Mix «Новогодний календарь», 237&nbsp;г.', 'products/календарь/календарь.png', '<p>Новый год &mdash; волшебный праздник, который все ждут с нетерпением. Сделайте ожидание ещё более радостным и запоминающимся вместе с новогодним календарём Kinder&reg;!&nbsp;<br />В новогоднем календаре Kinder&reg; 31 окошко (по одному на каждый день декабря). Открывайте по одному каждый день, находите спрятанные подарки Kinder&reg; и выполняйте увлекательные задания.<br />Новогодний календарь Kinder&reg; поможет создать радостные моменты для ребёнка каждый день, пока он ждёт наступление Нового Года!<br /><br />В наборе:</p>\r\n<ul>\r\n<li>фигурный молочный шоколад Kinder&reg; &mdash; 5 шт.;</li>\r\n<li>шоколад молочный Kinder&reg; Chocolate Mini &mdash; 7 шт.;</li>\r\n<li>шоколад молочный Kinder&reg; Chocolate со злаками Mini &mdash; 7 шт.;</li>\r\n<li>шоколад молочный Kinder&reg; Chocolate Happy &mdash; 6 шт.;</li>\r\n<li>вафли Kinder Bueno Mini &mdash; 6 шт.</li>\r\n</ul>', '[]', NULL, '2020-10-29 16:17:19'),
(2, 'Набор кондитерский изделий Kinder® Mix с подарком, 137,5&nbsp;г', 'products/игрушка/1.png', 'Новогодний набор с любимыми продуктами Kinder® и плюшевой игрушкой — прекрасный подарок для ребёнка!<br/><br/>В наборе:<ul><li>вафли Kinder Bueno —  1 шт.; </li><li>шоколад молочный Kinder® Chocolate (50 г) — 1 шт.;</li><li>шоколад молочный Kinder® Maxi — 1 шт.; </li><li>шоколад молочный Kinder® Chocolate со злаками — 1 шт;</li><li>плюшевая игрушка.</li></ul>', '[]', NULL, NULL),
(3, 'Набор кондитерский изделий Kinder® Mix с подарком, 137,5&nbsp;г', 'products/игрушка/2.png', 'Новогодний набор с любимыми продуктами Kinder® и плюшевой игрушкой — прекрасный подарок для ребёнка!<br/><br/>В наборе:<ul><li>вафли Kinder Bueno —  1 шт.; </li><li>шоколад молочный Kinder® Chocolate (50 г) — 1 шт.;</li><li>шоколад молочный Kinder® Maxi — 1 шт.; </li><li>шоколад молочный Kinder® Chocolate со злаками — 1 шт;</li><li>плюшевая игрушка.</li></ul>', '[]', NULL, NULL),
(4, 'Набор кондитерский изделий Kinder® Mix с подарком, 137,5&nbsp;г', 'products/игрушка/3.png', 'Новогодний набор с любимыми продуктами Kinder® и плюшевой игрушкой — прекрасный подарок для ребёнка!<br/><br/>В наборе:<ul><li>вафли Kinder Bueno —  1 шт.; </li><li>шоколад молочный Kinder® Chocolate (50 г) — 1 шт.;</li><li>шоколад молочный Kinder® Maxi — 1 шт.; </li><li>шоколад молочный Kinder® Chocolate со злаками — 1 шт;</li><li>плюшевая игрушка.</li></ul>', '[]', NULL, NULL),
(5, 'Набор кондитерский изделий Kinder® Mix с подарком, 137,5&nbsp;г', 'products/игрушка/4.png', 'Новогодний набор с любимыми продуктами Kinder® и плюшевой игрушкой — прекрасный подарок для ребёнка!<br/><br/>В наборе:<ul><li>вафли Kinder Bueno —  1 шт.; </li><li>шоколад молочный Kinder® Chocolate (50 г) — 1 шт.;</li><li>шоколад молочный Kinder® Maxi — 1 шт.; </li><li>шоколад молочный Kinder® Chocolate со злаками — 1 шт;</li><li>плюшевая игрушка.</li></ul>', '[]', NULL, NULL),
(6, 'Набор кондитерский изделий Kinder® Mix с подарком, 137,5&nbsp;г', 'products/игрушка/5.png', 'Новогодний набор с любимыми продуктами Kinder® и плюшевой игрушкой — прекрасный подарок для ребёнка!<br/><br/>В наборе:<ul><li>вафли Kinder Bueno —  1 шт.; </li><li>шоколад молочный Kinder® Chocolate (50 г) — 1 шт.;</li><li>шоколад молочный Kinder® Maxi — 1 шт.; </li><li>шоколад молочный Kinder® Chocolate со злаками — 1 шт;</li><li>плюшевая игрушка.</li></ul>', '[]', NULL, NULL),
(7, 'Набор кондитерский изделий Kinder® Mix «Рожки оленя», 167&nbsp;г', 'products/рожкиоленя/1.png', 'Новогодний набор с любимыми продуктами Kinder® и игрушкой — прекрасный подарок для ребёнка!<br/>Перевоплотиться в симпатичного новогоднего оленёнка? Это то, что нужно, для праздничного настроения!<br/><br/>В наборе:<ul><li>шоколад молочный Kinder® Chocolate Mini — 10 шт.;</li><li>шоколад молочный Kinder® Chocolate со злаками Mini — 10 шт.;</li><li>вафли Kinder Bueno Mini — 10 шт.;</li><li>плюшевая игрушка.</li><ul>', '[]', NULL, NULL),
(8, 'Набор кондитерский изделий Kinder® Mix «Рожки оленя», 167&nbsp;г', 'products/рожкиоленя/2.png', 'Новогодний набор с любимыми продуктами Kinder® и игрушкой — прекрасный подарок для ребёнка!<br/>Перевоплотиться в симпатичного новогоднего оленёнка? Это то, что нужно, для праздничного настроения!<br/><br/>В наборе:<ul><li>шоколад молочный Kinder® Chocolate Mini — 10 шт.;</li><li>шоколад молочный Kinder® Chocolate со злаками Mini — 10 шт.;</li><li>вафли Kinder Bueno Mini — 10 шт.;</li><li>плюшевая игрушка.</li><ul>', '[]', NULL, NULL),
(9, 'Набор кондитерский изделий Kinder® Mix «Кормушка для птиц», 99,7&nbsp;г', 'products/kinder_mix.png', 'Любимые продукты Kinder® в упаковке в виде кормушки для птиц, которую можно повесить на дерево — прекрасный подарок для ребёнка!<br/><br/>В наборе:<ul><li>шоколад молочный Kinder® Maxi —  2 шт.;</li><li>шоколад молочный Kinder® Chocolate со злаками — 1 шт.;</li><li>шоколад молочный Kinder® Chocolate Mini — 3 шт.;</li><li>вафли Kinder Bueno Mini — 3 шт.</li><ul>', '[]', NULL, NULL),
(10, 'Набор кондитерский изделий Kinder® Maxi Mix, 223&nbsp;г', 'products/mix223/1.png', 'Новогодний набор с любимыми продуктами Kinder® — прекрасный подарок для ребёнка! В этом году в уникальном дизайне с героями любимого мультфильма «Маша и Медведь».<br/><br/>В наборе:<ul><li>яйцо Kinder Сюрприз — 1 шт.;</li><li>вафли Kinder Bueno — 1 шт.;</li><li>шоколад молочный Kinder® Chocolate (50 г) — 1 шт.;</li><li>шоколад молочный Kinder® Maxi — 3 шт.;</li><li>шоколад молочный Kinder® Chocolate со злаками — 2 шт.</li><ul>', '[]', NULL, NULL),
(11, 'Набор кондитерский изделий Kinder® Maxi Mix, 223&nbsp;г', 'products/mix223/2.png', 'Новогодний набор с любимыми продуктами Kinder® — прекрасный подарок для ребёнка! В этом году в уникальном дизайне с героями любимого мультфильма «Маша и Медведь».<br/><br/>В наборе:<ul><li>яйцо Kinder Сюрприз — 1 шт.;</li><li>вафли Kinder Bueno — 1 шт.;</li><li>шоколад молочный Kinder® Chocolate (50 г) — 1 шт.;</li><li>шоколад молочный Kinder® Maxi — 3 шт.;</li><li>шоколад молочный Kinder® Chocolate со злаками — 2 шт.</li><ul>', '[]', NULL, NULL),
(12, 'Набор кондитерский изделий Kinder® Mix, 106,5&nbsp;г', 'products/Mix106/1.png', 'Новогодний набор с любимыми продуктами Kinder® — прекрасный подарок для ребёнка! В этом году в уникальном дизайне с героями любимого мультфильма «Маша и Медведь».<br/><br/>В наборе:<ul><li>яйцо Kinder Сюрприз — 1 шт.;</li><li>шоколад молочный Kinder® Maxi —  3 шт.; </li><li>шоколад молочный Kinder® Chocolate со злаками — 1 шт.</li><ul>', '[]', NULL, NULL),
(13, 'Набор кондитерский изделий Kinder® Mix, 106,5&nbsp;г', 'products/Mix106/2.png', 'Новогодний набор с любимыми продуктами Kinder® — прекрасный подарок для ребёнка! В этом году в уникальном дизайне с героями любимого мультфильма «Маша и Медведь».<br/><br/>В наборе:<ul><li>яйцо Kinder Сюрприз — 1 шт.;</li><li>шоколад молочный Kinder® Maxi —  3 шт.; </li><li>шоколад молочный Kinder® Chocolate со злаками — 1 шт.</li><ul>', '[]', NULL, NULL),
(14, 'Набор кондитерский изделий Kinder® Mix с новогодней игрой «Рождественская деревня», 187&nbsp;г', 'products/mix187.png', 'Новогодний набор с любимыми продуктами Kinder® — прекрасный подарок для ребёнка!<br/><br/>А внутри — интересная игра. Соберите волшебную рождественскую деревню. Наслаждайтесь счастливыми моментами веселья и творчества с Kinder®!<br/><br/>В наборе:<ul><li>шоколад молочный Kinder® Chocolate Mini — 11 шт.;</li><li>фигурный молочный шоколад Kinder® — 5 шт.;</li><li>конфеты из молочного шоколада Kinder Schoko-Bons —  46 г.;</li><li>настольно-печатная игра.</li><ul>', '[]', NULL, NULL),
(15, 'Фигурный молочный шоколад Kinder Сюрприз с игрушкой, 36&nbsp;г', 'products/фигурка/1.png', 'Фигурный молочный шоколад Kinder Сюрприз в форме новогодних персонажей и с игрушкой создан дарить праздничное настроение!', '[]', NULL, NULL),
(16, 'Фигурный молочный шоколад Kinder Сюрприз с игрушкой, 36&nbsp;г', 'products/фигурка/2.png', 'Фигурный молочный шоколад Kinder Сюрприз в форме новогодних персонажей и с игрушкой создан дарить праздничное настроение!', '[]', NULL, NULL),
(17, 'Фигурный молочный шоколад Kinder Сюрприз с игрушкой, 36&nbsp;г', 'products/фигурка/3.png', 'Фигурный молочный шоколад Kinder Сюрприз в форме новогодних персонажей и с игрушкой создан дарить праздничное настроение!', '[]', NULL, NULL),
(18, 'Фигурный молочный шоколад Kinder Сюрприз с игрушкой, 36&nbsp;г', 'products/фигурка/4.png', 'Фигурный молочный шоколад Kinder Сюрприз в форме новогодних персонажей и с игрушкой создан дарить праздничное настроение!', '[]', NULL, NULL),
(19, 'Фигурный молочный шоколад Kinder Сюрприз с игрушкой, 36&nbsp;г', 'products/фигурка/5.png', 'Фигурный молочный шоколад Kinder Сюрприз в форме новогодних персонажей и с игрушкой создан дарить праздничное настроение!', '[]', NULL, NULL),
(20, 'Шоколад молочный Kinder® Chocolate с молочной начинкой, 50&nbsp;г', 'products/choc_T4/1.png', 'Вкусный молочный шоколад Kinder® в новогодней упаковке поможет создать новогоднее настроение!', '[]', NULL, NULL),
(21, 'Шоколад молочный Kinder® Chocolate с молочной начинкой, 50&nbsp;г', 'products/choc_T4/2.png', 'Вкусный молочный шоколад Kinder® в новогодней упаковке поможет создать новогоднее настроение!', '[]', NULL, NULL),
(22, 'Шоколад молочный Kinder® Chocolate с молочной начинкой, 50&nbsp;г', 'products/choc_T4/3.png', 'Вкусный молочный шоколад Kinder® в новогодней упаковке поможет создать новогоднее настроение!', '[]', NULL, NULL),
(23, 'Шоколад молочный Kinder® Chocolate с молочной начинкой, 100&nbsp;г', 'products/Choc_T8/1.png', 'Вкусный молочный шоколад Kinder® в новогодней упаковке поможет создать новогоднее настроение!', '[]', NULL, NULL),
(24, 'Шоколад молочный Kinder® Chocolate с молочной начинкой, 100&nbsp;г', 'products/Choc_T8/2.png', 'Вкусный молочный шоколад Kinder® в новогодней упаковке поможет создать новогоднее настроение!', '[]', NULL, NULL),
(25, 'Шоколад молочный Kinder® Chocolate с молочной начинкой, 100&nbsp;г', 'products/Choc_T8/3.png', 'Вкусный молочный шоколад Kinder® в новогодней упаковке поможет создать новогоднее настроение!', '[]', NULL, NULL),
(26, 'Шоколад молочный Kinder® Chocolate с молочной начинкой, 150&nbsp;г', 'products/1.png', 'Вкусный молочный шоколад Kinder® в новогодней упаковке поможет создать новогоднее настроение!', '[]', NULL, NULL),
(27, 'Набор кондитерский изделий Kinder® Mini Mix, 34&nbsp;г', 'products/star.png', 'Какая новогодняя ёлка без звёздочки? Новогодний набор Kinder® в форме звезды можно использовать как украшение, а внутри ребёнка ждёт любимый молочный шоколад!<br/><br/>В наборе:<ul><li>шоколад молочный Kinder® Chocolate Mini — 3 шт.;</li><li>шоколад молочный Kinder® Chocolate со злаками Mini — 1 шт.;</li><li>вафли Kinder Bueno Mini — 1 шт.</li></ul>', '[]', NULL, NULL),
(28, 'Фигурный молочный шоколад Kinder® Дед Мороз, 55&nbsp;г', 'products/дедмороз/1_55.png', 'Любимый молочный шоколад Kinder® в форме Дедушки Мороза!', '[]', NULL, NULL),
(29, 'Фигурный молочный шоколад Kinder® Дед Мороз, 110&nbsp;г', 'products/дедмороз/1_100.png', 'Любимый молочный шоколад Kinder® в форме Дедушки Мороза!', '[]', NULL, NULL),
(30, 'Набор кондитерский изделий Kinder® Happy Moments, 242&nbsp;г', 'products/Happy_moments.png', 'Новогодний набор с любимыми продуктами Kinder® — прекрасный подарок для ребёнка!<br/><br/>В наборе:<ul><li>шоколад молочный Kinder® Chocolate Mini — 12 шт.;</li><li>шоколад молочный Kinder® Chocolate со злаками Mini — 8 шт.;</li><li>конфеты из молочного шоколада Kinder Schoko-Bons — 9 шт.;</li><li>вафли Kinder Bueno Mini — 7 шт.;</li><li>вафли Kinder Bueno White Mini — 7 шт.</li></ul>', '[]', NULL, NULL),
(31, 'Шоколад Молочный Kinder® Chocolate с новогодней игрой «Мастерская Деда Мороза», 200&nbsp;г', 'products/Мастерская.png', 'Любимый молочный шоколад Kinder® и новогодняя игра — прекрасный подарок для ребёнка! Ведь в мастерской у Дедушки Мороза много интересного.', '[]', NULL, NULL),
(32, 'Кондитерское изделие Kinder Joy с игрушкой, 20&nbsp;г', 'products/киндерджой/1.png', '<p>Двухслойная паста на основе молока и какао и покрытые какао вафельные шарики с молочным кремом внутри &mdash; двойная порция радости! А игрушки из специальной новогодней коллекции подарят ребёнку особенное настроение, чтобы сделать Новый Год ещё более весёлым.</p>', '[\"gifts\\/October2020\\/K1M6JP2YTcSPLbiOfg5I.jpg\",\"gifts\\/October2020\\/4yOGEOQOjXfsSCyjdbGV.jpg\",\"gifts\\/October2020\\/em7Jx4RashHNOp30DwQh.jpg\",\"gifts\\/October2020\\/4USEeiTDliRA4HFsubAM.jpg\",\"gifts\\/October2020\\/36dfQNVEiB10cH6dHeJ9.jpg\",\"gifts\\/October2020\\/3CY6O9ALhldMYDIuMK46.jpg\",\"gifts\\/October2020\\/F8kfPsbFaxKIzo3ScGE3.jpg\",\"gifts\\/October2020\\/rdAw3JqJu5H79CVzYov1.jpg\",\"gifts\\/October2020\\/72s7es9ZXyw1cLKrOGF9.jpg\",\"gifts\\/October2020\\/pmCiPhljusUThsmZFJC8.jpg\"]', NULL, '2020-10-29 14:34:15'),
(33, 'Кондитерское изделие Kinder Joy с игрушкой, 20&nbsp;г', 'products/киндерджой/2.png', 'Двухслойная паста на основе молока и какао и покрытые какао вафельные шарики с молочным кремом внутри — двойная порция радости! А игрушки из специальной новогодней коллекции подарят ребёнку особенное настроение, чтобы сделать Новый Год ещё более весёлым.', '[\"gifts\\/October2020\\/K1M6JP2YTcSPLbiOfg5I.jpg\",\"gifts\\/October2020\\/4yOGEOQOjXfsSCyjdbGV.jpg\",\"gifts\\/October2020\\/em7Jx4RashHNOp30DwQh.jpg\",\"gifts\\/October2020\\/4USEeiTDliRA4HFsubAM.jpg\",\"gifts\\/October2020\\/36dfQNVEiB10cH6dHeJ9.jpg\",\"gifts\\/October2020\\/3CY6O9ALhldMYDIuMK46.jpg\",\"gifts\\/October2020\\/F8kfPsbFaxKIzo3ScGE3.jpg\",\"gifts\\/October2020\\/rdAw3JqJu5H79CVzYov1.jpg\",\"gifts\\/October2020\\/72s7es9ZXyw1cLKrOGF9.jpg\",\"gifts\\/October2020\\/pmCiPhljusUThsmZFJC8.jpg\"]', NULL, NULL),
(34, 'Кондитерское изделие Kinder Joy с игрушкой, 20&nbsp;г', 'products/киндерджой/3.png', 'Двухслойная паста на основе молока и какао и покрытые какао вафельные шарики с молочным кремом внутри — двойная порция радости! А игрушки из специальной новогодней коллекции подарят ребёнку особенное настроение, чтобы сделать Новый Год ещё более весёлым.', '[\"gifts\\/October2020\\/K1M6JP2YTcSPLbiOfg5I.jpg\",\"gifts\\/October2020\\/4yOGEOQOjXfsSCyjdbGV.jpg\",\"gifts\\/October2020\\/em7Jx4RashHNOp30DwQh.jpg\",\"gifts\\/October2020\\/4USEeiTDliRA4HFsubAM.jpg\",\"gifts\\/October2020\\/36dfQNVEiB10cH6dHeJ9.jpg\",\"gifts\\/October2020\\/3CY6O9ALhldMYDIuMK46.jpg\",\"gifts\\/October2020\\/F8kfPsbFaxKIzo3ScGE3.jpg\",\"gifts\\/October2020\\/rdAw3JqJu5H79CVzYov1.jpg\",\"gifts\\/October2020\\/72s7es9ZXyw1cLKrOGF9.jpg\",\"gifts\\/October2020\\/pmCiPhljusUThsmZFJC8.jpg\"]', NULL, NULL),
(35, 'Кондитерское изделие Kinder Joy с игрушкой, 20&nbsp;г', 'products/киндерджой/4.png', 'Двухслойная паста на основе молока и какао и покрытые какао вафельные шарики с молочным кремом внутри — двойная порция радости! А игрушки из специальной новогодней коллекции подарят ребёнку особенное настроение, чтобы сделать Новый Год ещё более весёлым.', '[\"gifts\\/October2020\\/K1M6JP2YTcSPLbiOfg5I.jpg\",\"gifts\\/October2020\\/4yOGEOQOjXfsSCyjdbGV.jpg\",\"gifts\\/October2020\\/em7Jx4RashHNOp30DwQh.jpg\",\"gifts\\/October2020\\/4USEeiTDliRA4HFsubAM.jpg\",\"gifts\\/October2020\\/36dfQNVEiB10cH6dHeJ9.jpg\",\"gifts\\/October2020\\/3CY6O9ALhldMYDIuMK46.jpg\",\"gifts\\/October2020\\/F8kfPsbFaxKIzo3ScGE3.jpg\",\"gifts\\/October2020\\/rdAw3JqJu5H79CVzYov1.jpg\",\"gifts\\/October2020\\/72s7es9ZXyw1cLKrOGF9.jpg\",\"gifts\\/October2020\\/pmCiPhljusUThsmZFJC8.jpg\"]', NULL, NULL),
(36, 'Kinder Сюрприз Т3 Новый год', 'products/kinderx3.png', 'Игрушка, молочный шоколад и радостное ожидание сюрприза в тройном размере — праздничного настроения станет ещё больше!', '[]', NULL, NULL),
(37, 'Набор кондитерский изделий Kinder® Mix, 199&nbsp;г ', 'products/mix199/1.png', 'Новогодний набор с любимыми продуктами Kinder® — прекрасный подарок для ребёнка! В этом году в уникальном дизайне с героями любимого мультфильма «Маша и Медведь».<br/><br/>В наборе:<ul><li>яйцо Kinder Сюрприз — 1 шт.;</li><li>вафли Kinder Bueno — 1 шт.;</li><li>шоколад молочный Kinder® Chocolate (50 г) — 1 шт.;</li><li>шоколад молочный Kinder® Maxi — 3 шт.;</li><li>шоколад молочный Kinder® Chocolate со злаками — 1 шт.</li><ul>', '[]', NULL, NULL),
(38, 'Набор кондитерский изделий Kinder® Mix, 199&nbsp;г ', 'products/mix199/2.png', 'Новогодний набор с любимыми продуктами Kinder® — прекрасный подарок для ребёнка! В этом году в уникальном дизайне с героями любимого мультфильма «Маша и Медведь».<br/><br/>В наборе:<ul><li>яйцо Kinder Сюрприз — 1 шт.;</li><li>вафли Kinder Bueno — 1 шт.;</li><li>шоколад молочный Kinder® Chocolate (50 г) — 1 шт.;</li><li>шоколад молочный Kinder® Maxi — 3 шт.;</li><li>шоколад молочный Kinder® Chocolate со злаками — 1 шт.</li><ul>', '[]', NULL, NULL),
(39, 'Яйцо Kinder Сюрприз c игрушкой внутри, 220&nbsp;г', 'products/киндерсюрприз220г/1.png', '<p>Всё, за что дети так любят Kinder Сюрприз, в специальном большом формате. Большие новогодние игрушки, вкусный молочный шоколад и радостное ожидание сюрприза!</p>', '[\"gifts\\/October2020\\/Bb5QPFhW1bdxeCCMADwZ.png\",\"gifts\\/October2020\\/I7JrdOPF03Xw7Trfv5kg.png\",\"gifts\\/October2020\\/TRk7ulcB6jnHj9pkC8ZW.png\"]', NULL, '2020-10-29 14:36:47'),
(40, 'Яйцо Kinder Сюрприз c игрушкой внутри, 220&nbsp;г', 'products/киндерсюрприз220г/2.png', '<p>Всё, за что дети так любят Kinder Сюрприз, в специальном большом формате. Большие новогодние игрушки, вкусный молочный шоколад и радостное ожидание сюрприза!</p>', '[\"gifts\\/October2020\\/b40RK7FUrfniOcCNsE1O.png\",\"gifts\\/October2020\\/w9XZClBx9afOlyn612j7.png\",\"gifts\\/October2020\\/Y8fMXaNSuKFFVLCL8xhi.png\"]', NULL, '2020-10-29 14:37:01'),
(41, 'Яйцо Kinder Сюрприз c игрушкой внутри, 20&nbsp;г', 'products/киндерсюрприз20г/1.png', '<p>Новогодняя игрушка, молочный шоколад и радостное ожидание сюрприза &mdash; это ещё не всё! Kinder Сюрприз можно повесить на ёлку, и праздничного настроения станет ещё больше!</p>', '[\"gifts\\/October2020\\/uvgNNGb39HsDsUP43Lag.png\",\"gifts\\/October2020\\/TZdie4Rt00VMszbj7UM9.png\",\"gifts\\/October2020\\/FPr789cEidCqaav6ht3g.png\",\"gifts\\/October2020\\/StTdlL2GSgDwCdsI5B5u.png\",\"gifts\\/October2020\\/oMi0dWCBcXesjzZBeg5L.png\",\"gifts\\/October2020\\/DXCjSduI0H0zliEOf6kS.png\",\"gifts\\/October2020\\/QNCFEGD0ivxAfoSBKNeE.png\",\"gifts\\/October2020\\/P8ZpG8ugbteahI7QsTGm.png\",\"gifts\\/October2020\\/1bP2regKcNomDMVPUxrW.png\",\"gifts\\/October2020\\/CUO8EARL8I0ASZVQaF4z.png\",\"gifts\\/October2020\\/XfuwWgHIfB4eIq8JlgmB.png\",\"gifts\\/October2020\\/IwE9jbx1jAiZulL52wzD.png\",\"gifts\\/October2020\\/h11oQ5dWISJWnrtEW5Y0.png\"]', NULL, '2020-10-29 14:37:44'),
(42, 'Яйцо Kinder Сюрприз c игрушкой внутри, 20&nbsp;г', 'products/киндерсюрприз20г/2.png', 'Новогодняя игрушка, молочный шоколад и радостное ожидание сюрприза — это ещё не всё! Kinder Сюрприз можно повесить на ёлку, и праздничного настроения станет ещё больше!', '[\"gifts\\/October2020\\/uvgNNGb39HsDsUP43Lag.png\",\"gifts\\/October2020\\/TZdie4Rt00VMszbj7UM9.png\",\"gifts\\/October2020\\/FPr789cEidCqaav6ht3g.png\",\"gifts\\/October2020\\/StTdlL2GSgDwCdsI5B5u.png\",\"gifts\\/October2020\\/oMi0dWCBcXesjzZBeg5L.png\",\"gifts\\/October2020\\/DXCjSduI0H0zliEOf6kS.png\",\"gifts\\/October2020\\/QNCFEGD0ivxAfoSBKNeE.png\",\"gifts\\/October2020\\/P8ZpG8ugbteahI7QsTGm.png\",\"gifts\\/October2020\\/1bP2regKcNomDMVPUxrW.png\",\"gifts\\/October2020\\/CUO8EARL8I0ASZVQaF4z.png\",\"gifts\\/October2020\\/XfuwWgHIfB4eIq8JlgmB.png\",\"gifts\\/October2020\\/IwE9jbx1jAiZulL52wzD.png\",\"gifts\\/October2020\\/h11oQ5dWISJWnrtEW5Y0.png\"]', NULL, NULL),
(43, 'Яйцо Kinder Сюрприз c игрушкой внутри, 20&nbsp;г', 'products/киндерсюрприз20г/3.png', 'Новогодняя игрушка, молочный шоколад и радостное ожидание сюрприза — это ещё не всё! Kinder Сюрприз можно повесить на ёлку, и праздничного настроения станет ещё больше!', '[\"gifts\\/October2020\\/uvgNNGb39HsDsUP43Lag.png\",\"gifts\\/October2020\\/TZdie4Rt00VMszbj7UM9.png\",\"gifts\\/October2020\\/FPr789cEidCqaav6ht3g.png\",\"gifts\\/October2020\\/StTdlL2GSgDwCdsI5B5u.png\",\"gifts\\/October2020\\/oMi0dWCBcXesjzZBeg5L.png\",\"gifts\\/October2020\\/DXCjSduI0H0zliEOf6kS.png\",\"gifts\\/October2020\\/QNCFEGD0ivxAfoSBKNeE.png\",\"gifts\\/October2020\\/P8ZpG8ugbteahI7QsTGm.png\",\"gifts\\/October2020\\/1bP2regKcNomDMVPUxrW.png\",\"gifts\\/October2020\\/CUO8EARL8I0ASZVQaF4z.png\",\"gifts\\/October2020\\/XfuwWgHIfB4eIq8JlgmB.png\",\"gifts\\/October2020\\/IwE9jbx1jAiZulL52wzD.png\",\"gifts\\/October2020\\/h11oQ5dWISJWnrtEW5Y0.png\"]', NULL, NULL),
(44, 'Яйцо Kinder Сюрприз c игрушкой внутри, 20&nbsp;г', 'products/киндерсюрприз20г/4.png', 'Новогодняя игрушка, молочный шоколад и радостное ожидание сюрприза — это ещё не всё! Kinder Сюрприз можно повесить на ёлку, и праздничного настроения станет ещё больше!', '[\"gifts\\/October2020\\/uvgNNGb39HsDsUP43Lag.png\",\"gifts\\/October2020\\/TZdie4Rt00VMszbj7UM9.png\",\"gifts\\/October2020\\/FPr789cEidCqaav6ht3g.png\",\"gifts\\/October2020\\/StTdlL2GSgDwCdsI5B5u.png\",\"gifts\\/October2020\\/oMi0dWCBcXesjzZBeg5L.png\",\"gifts\\/October2020\\/DXCjSduI0H0zliEOf6kS.png\",\"gifts\\/October2020\\/QNCFEGD0ivxAfoSBKNeE.png\",\"gifts\\/October2020\\/P8ZpG8ugbteahI7QsTGm.png\",\"gifts\\/October2020\\/1bP2regKcNomDMVPUxrW.png\",\"gifts\\/October2020\\/CUO8EARL8I0ASZVQaF4z.png\",\"gifts\\/October2020\\/XfuwWgHIfB4eIq8JlgmB.png\",\"gifts\\/October2020\\/IwE9jbx1jAiZulL52wzD.png\",\"gifts\\/October2020\\/h11oQ5dWISJWnrtEW5Y0.png\"]', NULL, NULL),
(45, 'Яйцо Kinder Сюрприз c игрушкой внутри, 20&nbsp;г', 'products/киндерсюрприз20г/5.png', 'Новогодняя игрушка, молочный шоколад и радостное ожидание сюрприза — это ещё не всё! Kinder Сюрприз можно повесить на ёлку, и праздничного настроения станет ещё больше!', '[\"gifts\\/October2020\\/uvgNNGb39HsDsUP43Lag.png\",\"gifts\\/October2020\\/TZdie4Rt00VMszbj7UM9.png\",\"gifts\\/October2020\\/FPr789cEidCqaav6ht3g.png\",\"gifts\\/October2020\\/StTdlL2GSgDwCdsI5B5u.png\",\"gifts\\/October2020\\/oMi0dWCBcXesjzZBeg5L.png\",\"gifts\\/October2020\\/DXCjSduI0H0zliEOf6kS.png\",\"gifts\\/October2020\\/QNCFEGD0ivxAfoSBKNeE.png\",\"gifts\\/October2020\\/P8ZpG8ugbteahI7QsTGm.png\",\"gifts\\/October2020\\/1bP2regKcNomDMVPUxrW.png\",\"gifts\\/October2020\\/CUO8EARL8I0ASZVQaF4z.png\",\"gifts\\/October2020\\/XfuwWgHIfB4eIq8JlgmB.png\",\"gifts\\/October2020\\/IwE9jbx1jAiZulL52wzD.png\",\"gifts\\/October2020\\/h11oQ5dWISJWnrtEW5Y0.png\"]', NULL, NULL),
(46, 'Яйцо Kinder Сюрприз c игрушкой внутри, 20&nbsp;г', 'products/киндерсюрприз20г/6.png', 'Новогодняя игрушка, молочный шоколад и радостное ожидание сюрприза — это ещё не всё! Kinder Сюрприз можно повесить на ёлку, и праздничного настроения станет ещё больше!', '[\"gifts\\/October2020\\/uvgNNGb39HsDsUP43Lag.png\",\"gifts\\/October2020\\/TZdie4Rt00VMszbj7UM9.png\",\"gifts\\/October2020\\/FPr789cEidCqaav6ht3g.png\",\"gifts\\/October2020\\/StTdlL2GSgDwCdsI5B5u.png\",\"gifts\\/October2020\\/oMi0dWCBcXesjzZBeg5L.png\",\"gifts\\/October2020\\/DXCjSduI0H0zliEOf6kS.png\",\"gifts\\/October2020\\/QNCFEGD0ivxAfoSBKNeE.png\",\"gifts\\/October2020\\/P8ZpG8ugbteahI7QsTGm.png\",\"gifts\\/October2020\\/1bP2regKcNomDMVPUxrW.png\",\"gifts\\/October2020\\/CUO8EARL8I0ASZVQaF4z.png\",\"gifts\\/October2020\\/XfuwWgHIfB4eIq8JlgmB.png\",\"gifts\\/October2020\\/IwE9jbx1jAiZulL52wzD.png\",\"gifts\\/October2020\\/h11oQ5dWISJWnrtEW5Y0.png\"]', NULL, NULL),
(47, 'Яйцо Kinder Сюрприз Maxi c игрушкой внутри, 100&nbsp;г', 'products/киндермакси/1.png', '<p>Всё, за что дети так любят Kinder Сюрприз, в специальном большом формате. Большие новогодние игрушки, вкусный молочный шоколад и радостное ожидание сюрприза!</p>', '[\"gifts\\/October2020\\/Lh0S9a0dSAISKnLNQ6lK.png\",\"gifts\\/October2020\\/NhprcFmGkid3QtULDvij.png\",\"gifts\\/October2020\\/KYPIv7q4GPZKegOjtVRY.png\",\"gifts\\/October2020\\/Ozqr4rPTEYVSaCzzVDsu.png\",\"gifts\\/October2020\\/D4AaWfdZUilqTiPmA01j.png\"]', NULL, '2020-10-29 14:39:00'),
(48, 'Яйцо Kinder Сюрприз Maxi c игрушкой внутри, 100&nbsp;г', 'products/киндермакси/2.png', 'Всё, за что дети так любят Kinder Сюрприз, в специальном большом формате. Большие новогодние игрушки, вкусный молочный шоколад и радостное ожидание сюрприза!', '[\"gifts\\/October2020\\/Lh0S9a0dSAISKnLNQ6lK.png\",\"gifts\\/October2020\\/NhprcFmGkid3QtULDvij.png\",\"gifts\\/October2020\\/KYPIv7q4GPZKegOjtVRY.png\",\"gifts\\/October2020\\/Ozqr4rPTEYVSaCzzVDsu.png\",\"gifts\\/October2020\\/D4AaWfdZUilqTiPmA01j.png\"]', NULL, NULL),
(49, 'Яйцо Kinder Сюрприз Maxi c игрушкой внутри, 100&nbsp;г', 'products/киндермакси/3.png', 'Всё, за что дети так любят Kinder Сюрприз, в специальном большом формате. Большие новогодние игрушки, вкусный молочный шоколад и радостное ожидание сюрприза!', '[\"gifts\\/October2020\\/Lh0S9a0dSAISKnLNQ6lK.png\",\"gifts\\/October2020\\/NhprcFmGkid3QtULDvij.png\",\"gifts\\/October2020\\/KYPIv7q4GPZKegOjtVRY.png\",\"gifts\\/October2020\\/Ozqr4rPTEYVSaCzzVDsu.png\",\"gifts\\/October2020\\/D4AaWfdZUilqTiPmA01j.png\"]', NULL, NULL),
(50, 'Яйцо Kinder Сюрприз Maxi c игрушкой внутри, 100&nbsp;г', 'products/киндермакси/4.png', 'Всё, за что дети так любят Kinder Сюрприз, в специальном большом формате. Большие новогодние игрушки, вкусный молочный шоколад и радостное ожидание сюрприза!', '[\"gifts\\/October2020\\/Lh0S9a0dSAISKnLNQ6lK.png\",\"gifts\\/October2020\\/NhprcFmGkid3QtULDvij.png\",\"gifts\\/October2020\\/KYPIv7q4GPZKegOjtVRY.png\",\"gifts\\/October2020\\/Ozqr4rPTEYVSaCzzVDsu.png\",\"gifts\\/October2020\\/D4AaWfdZUilqTiPmA01j.png\"]', NULL, NULL),
(51, 'Конфеты Kinder Shoko-Bons, 46 г/125&nbsp;г.', 'products/bons.45.png', 'Kinder Schoko-Bons — шоколад Kinder® в форме конфетки. Это весёлое лакомство, которым так легко и радостно делиться друг с другом, в специальном новогоднем дизайне!', '[]', NULL, NULL),
(52, 'Шоколад молочный Kinder® Chocolate с молочной начинкой, 300&nbsp;г.', 'products/metr.png', 'Целых полметра любимого молочного шоколада Kinder® в новогодней упаковке — прекрасный подарок для ребёнка!', '[]', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `girls`
--

CREATE TABLE `girls` (
  `id` bigint UNSIGNED NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `girls`
--

INSERT INTO `girls` (`id`, `value`, `created_at`, `updated_at`) VALUES
(1, 'Аврора', NULL, '2020-10-29 15:43:00'),
(2, 'Агата', NULL, NULL),
(3, 'Аглая', NULL, NULL),
(4, 'Аделина', NULL, NULL),
(5, 'Адель', NULL, NULL),
(6, 'Адиля', NULL, NULL),
(7, 'Азалия', NULL, NULL),
(8, 'Аидочка', NULL, NULL),
(9, 'Аиша', NULL, NULL),
(10, 'Айгуль', NULL, NULL),
(11, 'Айша', NULL, NULL),
(12, 'Аленочка', NULL, NULL),
(13, 'Алечка', NULL, NULL),
(14, 'Алима', NULL, NULL),
(15, 'Алиночка', NULL, NULL),
(16, 'Алисочка', NULL, NULL),
(17, 'Алиюшечка', NULL, NULL),
(18, 'Алия', NULL, NULL),
(19, 'Аллочка', NULL, NULL),
(20, 'Алсу', NULL, NULL),
(21, 'Альбиночка', NULL, NULL),
(22, 'Альфиюша', NULL, NULL),
(23, 'Амелия', NULL, NULL),
(24, 'Амина', NULL, NULL),
(25, 'Амира', NULL, NULL),
(26, 'Анаит', NULL, NULL),
(27, 'Анжелика', NULL, NULL),
(28, 'Анжелочка', NULL, NULL),
(29, 'Анечка', NULL, NULL),
(30, 'Ани', NULL, NULL),
(31, 'Аниса', NULL, NULL),
(32, 'Анфисочка', NULL, NULL),
(33, 'Ариана', NULL, NULL),
(34, 'Ариша', NULL, NULL),
(35, 'Асма', NULL, NULL),
(36, 'Ася', NULL, NULL),
(37, 'Ая', NULL, NULL),
(38, 'Белла', NULL, NULL),
(39, 'Валенька', NULL, NULL),
(40, 'Валида', NULL, NULL),
(41, 'Варечка', NULL, NULL),
(42, 'Василиса', NULL, NULL),
(43, 'Васима', NULL, NULL),
(44, 'Венера', NULL, NULL),
(45, 'Вероника', NULL, NULL),
(46, 'Верочка', NULL, NULL),
(47, 'Викуля', NULL, NULL),
(48, 'Виолетта', NULL, NULL),
(49, 'Виточка', NULL, NULL),
(50, 'Галенька', NULL, NULL),
(51, 'Гаяне', NULL, NULL),
(52, 'Гретта', NULL, NULL),
(53, 'Гузель', NULL, NULL),
(54, 'Гульнара', NULL, NULL),
(55, 'Гуля', NULL, NULL),
(56, 'Дамира', NULL, NULL),
(57, 'Даниэла', NULL, NULL),
(58, 'Даночка', NULL, NULL),
(59, 'Дарина', NULL, NULL),
(60, 'Дария', NULL, NULL),
(61, 'Дашенька', NULL, NULL),
(62, 'Дианочка', NULL, NULL),
(63, 'Диля', NULL, NULL),
(64, 'Диляра', NULL, NULL),
(65, 'Динара', NULL, NULL),
(66, 'Диночка', NULL, NULL),
(67, 'Евдокия', NULL, NULL),
(68, 'Евочка', NULL, NULL),
(69, 'Есения', NULL, NULL),
(70, 'Жанночка', NULL, NULL),
(71, 'Женечка', NULL, NULL),
(72, 'Заира', NULL, NULL),
(73, 'Закия', NULL, NULL),
(74, 'Залина', NULL, NULL),
(75, 'Зара', NULL, NULL),
(76, 'Зиля', NULL, NULL),
(77, 'Зиночка', NULL, NULL),
(78, 'Златочка', NULL, NULL),
(79, 'Зоечка', NULL, NULL),
(80, 'Зуличка', NULL, NULL),
(81, 'Зухра', NULL, NULL),
(82, 'Ильнура', NULL, NULL),
(83, 'Инга', NULL, NULL),
(84, 'Инесса', NULL, NULL),
(85, 'Инночка', NULL, NULL),
(86, 'Ирада', NULL, NULL),
(87, 'Иришка', NULL, NULL),
(88, 'Ия', NULL, NULL),
(89, 'Камила', NULL, NULL),
(90, 'Карима', NULL, NULL),
(91, 'Кариночка', NULL, NULL),
(92, 'Каролина', NULL, NULL),
(93, 'Катенька', NULL, NULL),
(94, 'Кира', NULL, NULL),
(95, 'Кирочка', NULL, NULL),
(96, 'Клава', NULL, NULL),
(97, 'Кларочка', NULL, NULL),
(98, 'Кристиночка', NULL, NULL),
(99, 'Ксюшенька', NULL, NULL),
(100, 'Лада', NULL, NULL),
(101, 'Ладочка', NULL, NULL),
(102, 'Ланочка', NULL, NULL),
(103, 'Ларисочка', NULL, NULL),
(104, 'Лейла', NULL, NULL),
(105, 'Леночка', NULL, NULL),
(106, 'Лерочка', NULL, NULL),
(107, 'Лесечка', NULL, NULL),
(108, 'Лианочка', NULL, NULL),
(109, 'Лидочка', NULL, NULL),
(110, 'Лиза', NULL, NULL),
(111, 'Лика', NULL, NULL),
(112, 'Лилечка', NULL, NULL),
(113, 'Линочка', NULL, NULL),
(114, 'Луиза', NULL, NULL),
(115, 'Любочка', NULL, NULL),
(116, 'Людочка', NULL, NULL),
(117, 'Ляйсан', NULL, NULL),
(118, 'Мадина', NULL, NULL),
(119, 'Маечка', NULL, NULL),
(120, 'Малика', NULL, NULL),
(121, 'Марго', NULL, NULL),
(122, 'Мариночка', NULL, NULL),
(123, 'Марточка', NULL, NULL),
(124, 'Марфуша', NULL, NULL),
(125, 'Марьям', NULL, NULL),
(126, 'Марьяна', NULL, NULL),
(127, 'Машенька', NULL, NULL),
(128, 'Мелисса', NULL, NULL),
(129, 'Милана', NULL, NULL),
(130, 'Милена', NULL, NULL),
(131, 'Милочка', NULL, NULL),
(132, 'Мирослава', NULL, NULL),
(133, 'Мирочка', NULL, NULL),
(134, 'Наденька', NULL, NULL),
(135, 'Надира', NULL, NULL),
(136, 'Наиля', NULL, NULL),
(137, 'Нарима', NULL, NULL),
(138, 'Настенька', NULL, NULL),
(139, 'Наташенька', NULL, NULL),
(140, 'Нелечка', NULL, NULL),
(141, 'Нигара', NULL, NULL),
(142, 'Никуля', NULL, NULL),
(143, 'Ниночка', NULL, NULL),
(144, 'Нонна', NULL, NULL),
(145, 'Нурия', NULL, NULL),
(146, 'Оксаночка', NULL, NULL),
(147, 'Олеся', NULL, NULL),
(148, 'Олечка', NULL, NULL),
(149, 'Оливия', NULL, NULL),
(150, 'Офелия', NULL, NULL),
(151, 'Пелагея', NULL, NULL),
(152, 'Поля', NULL, NULL),
(153, 'Рада', NULL, NULL),
(154, 'Радима', NULL, NULL),
(155, 'Раечка', NULL, NULL),
(156, 'Ралина', NULL, NULL),
(157, 'Рашида', NULL, NULL),
(158, 'Региночка', NULL, NULL),
(159, 'Ренаточка', NULL, NULL),
(160, 'Риммочка', NULL, NULL),
(161, 'Риточка', NULL, NULL),
(162, 'Розочка', NULL, NULL),
(163, 'Руслана', NULL, NULL),
(164, 'Рушаночка', NULL, NULL),
(165, 'Сабина', NULL, NULL),
(166, 'Сабиночка', NULL, NULL),
(167, 'Садия', NULL, NULL),
(168, 'Саида', NULL, NULL),
(169, 'Салия', NULL, NULL),
(170, 'Самира', NULL, NULL),
(171, 'Сарра', NULL, NULL),
(172, 'Сашенька', NULL, NULL),
(173, 'Света', NULL, NULL),
(174, 'Серафима', NULL, NULL),
(175, 'Славочка', NULL, NULL),
(177, 'Снежаночка', NULL, NULL),
(230, 'Сонечка', NULL, NULL),
(231, 'Софочка', NULL, NULL),
(232, 'Станислава', NULL, NULL),
(233, 'Стефания', NULL, NULL),
(234, 'Сюзанночка', NULL, NULL),
(235, 'Талия', NULL, NULL),
(236, 'Танюша', NULL, NULL),
(237, 'Тася', NULL, NULL),
(238, 'Тая', NULL, NULL),
(239, 'Тома', NULL, NULL),
(240, 'Тонечка', NULL, NULL),
(241, 'Улечка', NULL, NULL),
(242, 'Фаиля', NULL, NULL),
(243, 'Фаина', NULL, NULL),
(244, 'Фатима', NULL, NULL),
(245, 'Чулпан', NULL, NULL),
(246, 'Шакира', NULL, NULL),
(247, 'Шамиля', NULL, NULL),
(248, 'Шурочка', NULL, NULL),
(249, 'Эвелиночка', NULL, NULL),
(250, 'Элечка', NULL, NULL),
(251, 'Элиночка', NULL, NULL),
(252, 'Эльзочка', NULL, NULL),
(253, 'Эммочка', NULL, NULL),
(254, 'Юленька', NULL, NULL),
(255, 'Яночка', NULL, NULL),
(256, 'Ярослава', NULL, NULL),
(257, 'Ясмина', NULL, NULL),
(258, 'Яся', NULL, NULL),
(259, 'Внученька', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `hobbies`
--

CREATE TABLE `hobbies` (
  `id` bigint UNSIGNED NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `hobbies`
--

INSERT INTO `hobbies` (`id`, `value`, `created_at`, `updated_at`) VALUES
(1, 'Любишь играть в футбол.', NULL, '2020-10-29 15:42:07'),
(2, 'Любишь играть в баскетбол.', NULL, NULL),
(3, 'Любишь играть в волейбол.', NULL, NULL),
(4, 'Любишь играть в хоккей.', NULL, NULL),
(5, 'Любишь играть в теннис.', NULL, NULL),
(6, 'Любишь играть в шашки.', NULL, NULL),
(7, 'Любишь играть в шахматы.', NULL, NULL),
(8, 'Любишь играть в настольные игры.', NULL, NULL),
(9, 'Любишь играть на музыкальных инструментах.', NULL, NULL),
(10, 'Любишь кататься на коньках.', NULL, NULL),
(11, 'Любишь кататься на самокате.', NULL, NULL),
(12, 'Любишь кататься на скейтборде.', NULL, NULL),
(13, 'Любишь кататься на роликах.', NULL, NULL),
(14, 'Любишь кататься на велосипеде.', NULL, NULL),
(15, 'Любишь кататься на лыжах.', NULL, NULL),
(16, 'Любишь танцевать.', NULL, NULL),
(17, 'Любишь рисовать.', NULL, NULL),
(18, 'Любишь петь.', NULL, NULL),
(19, 'Любишь читать.', NULL, NULL),
(20, 'Любишь собирать пазлы.', NULL, NULL),
(21, 'Любишь плавать.', NULL, NULL),
(22, 'Любишь слушать сказки.', NULL, NULL),
(23, 'Любишь смотреть мультфильмы.', NULL, NULL),
(24, 'Любишь слушать музыку.', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `menus`
--

CREATE TABLE `menus` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `menus`
--

INSERT INTO `menus` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2020-10-29 10:28:55', '2020-10-29 10:28:55');

-- --------------------------------------------------------

--
-- Структура таблицы `menu_items`
--

CREATE TABLE `menu_items` (
  `id` int UNSIGNED NOT NULL,
  `menu_id` int UNSIGNED DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `target` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '_self',
  `icon_class` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int DEFAULT NULL,
  `order` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `route` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parameters` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `menu_items`
--

INSERT INTO `menu_items` (`id`, `menu_id`, `title`, `url`, `target`, `icon_class`, `color`, `parent_id`, `order`, `created_at`, `updated_at`, `route`, `parameters`) VALUES
(2, 1, 'Media', '', '_self', 'voyager-images', NULL, NULL, 11, '2020-10-29 10:28:55', '2020-10-29 14:54:52', 'voyager.media.index', NULL),
(3, 1, 'Users', '', '_self', 'voyager-person', NULL, NULL, 8, '2020-10-29 10:28:55', '2020-10-29 14:54:52', 'voyager.users.index', NULL),
(4, 1, 'Roles', '', '_self', 'voyager-lock', NULL, NULL, 9, '2020-10-29 10:28:55', '2020-10-29 14:54:52', 'voyager.roles.index', NULL),
(5, 1, 'Tools', '', '_self', 'voyager-tools', NULL, NULL, 12, '2020-10-29 10:28:55', '2020-10-29 14:54:41', NULL, NULL),
(6, 1, 'Menu Builder', '', '_self', 'voyager-list', NULL, 5, 1, '2020-10-29 10:28:55', '2020-10-29 14:54:41', 'voyager.menus.index', NULL),
(7, 1, 'Database', '', '_self', 'voyager-data', NULL, 5, 2, '2020-10-29 10:28:55', '2020-10-29 14:54:41', 'voyager.database.index', NULL),
(8, 1, 'Compass', '', '_self', 'voyager-compass', NULL, 5, 3, '2020-10-29 10:28:55', '2020-10-29 14:54:41', 'voyager.compass.index', NULL),
(9, 1, 'BREAD', '', '_self', 'voyager-bread', NULL, 5, 4, '2020-10-29 10:28:55', '2020-10-29 14:54:41', 'voyager.bread.index', NULL),
(10, 1, 'Settings', '', '_self', 'voyager-settings', NULL, NULL, 13, '2020-10-29 10:28:55', '2020-10-29 14:54:41', 'voyager.settings.index', NULL),
(11, 1, 'Hooks', '', '_self', 'voyager-hook', NULL, 5, 5, '2020-10-29 10:28:56', '2020-10-29 14:54:41', 'voyager.hooks', NULL),
(12, 1, 'Gifts', '', '_self', NULL, NULL, NULL, 4, '2020-10-29 14:15:49', '2020-10-29 14:54:38', 'voyager.gifts.index', NULL),
(13, 1, 'Boys', '', '_self', NULL, NULL, NULL, 2, '2020-10-29 14:40:03', '2020-10-29 14:54:38', 'voyager.boys.index', NULL),
(14, 1, 'Froms', '', '_self', NULL, NULL, NULL, 5, '2020-10-29 14:40:13', '2020-10-29 14:54:38', 'voyager.froms.index', NULL),
(15, 1, 'Girls', '', '_self', NULL, NULL, NULL, 3, '2020-10-29 14:40:30', '2020-10-29 14:54:38', 'voyager.girls.index', NULL),
(16, 1, 'Hobbies', '', '_self', NULL, NULL, NULL, 6, '2020-10-29 14:40:38', '2020-10-29 14:54:52', 'voyager.hobbies.index', NULL),
(17, 1, 'Achieves', '', '_self', NULL, NULL, NULL, 7, '2020-10-29 14:43:25', '2020-10-29 14:54:52', 'voyager.achieves.index', NULL),
(18, 1, 'Заявки', '', '_self', 'voyager-list', '#000000', NULL, 1, '2020-10-29 14:53:26', '2020-10-29 15:01:48', 'voyager.orders.index', 'null');

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_01_01_000000_add_voyager_user_fields', 1),
(4, '2016_01_01_000000_create_data_types_table', 1),
(5, '2016_05_19_173453_create_menu_table', 1),
(6, '2016_10_21_190000_create_roles_table', 1),
(7, '2016_10_21_190000_create_settings_table', 1),
(8, '2016_11_30_135954_create_permission_table', 1),
(9, '2016_11_30_141208_create_permission_role_table', 1),
(10, '2016_12_26_201236_data_types__add__server_side', 1),
(11, '2017_01_13_000000_add_route_to_menu_items_table', 1),
(12, '2017_01_14_005015_create_translations_table', 1),
(13, '2017_01_15_000000_make_table_name_nullable_in_permissions_table', 1),
(14, '2017_03_06_000000_add_controller_to_data_types_table', 1),
(15, '2017_04_21_000000_add_order_to_data_rows_table', 1),
(16, '2017_07_05_210000_add_policyname_to_data_types_table', 1),
(17, '2017_08_05_000000_add_group_to_settings_table', 1),
(18, '2017_11_26_013050_add_user_role_relationship', 1),
(19, '2017_11_26_015000_create_user_roles_table', 1),
(20, '2018_03_11_000000_add_user_settings', 1),
(21, '2018_03_14_000000_add_details_to_data_types_table', 1),
(22, '2018_03_16_000000_make_settings_value_nullable', 1),
(23, '2019_08_19_000000_create_failed_jobs_table', 1),
(24, '2020_10_29_195049_create_girls_table', 2),
(25, '2020_10_29_195135_create_boys_table', 2),
(26, '2020_10_29_195156_create_achieves_table', 2),
(27, '2020_10_29_195310_create_hobbies_table', 2),
(28, '2020_10_29_195357_create_froms_table', 2),
(29, '2020_10_29_195407_create_gifts_table', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` bigint UNSIGNED NOT NULL,
  `boy_id` int DEFAULT NULL,
  `girl_id` int DEFAULT NULL,
  `age` int DEFAULT NULL,
  `achieve_id` int DEFAULT NULL,
  `hobby_id` int DEFAULT NULL,
  `from_id` int DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gift_id` int DEFAULT NULL,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_hash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `confirmed` tinyint DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint UNSIGNED NOT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `table_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `permissions`
--

INSERT INTO `permissions` (`id`, `key`, `table_name`, `created_at`, `updated_at`) VALUES
(1, 'browse_admin', NULL, '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(2, 'browse_bread', NULL, '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(3, 'browse_database', NULL, '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(4, 'browse_media', NULL, '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(5, 'browse_compass', NULL, '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(6, 'browse_menus', 'menus', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(7, 'read_menus', 'menus', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(8, 'edit_menus', 'menus', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(9, 'add_menus', 'menus', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(10, 'delete_menus', 'menus', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(11, 'browse_roles', 'roles', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(12, 'read_roles', 'roles', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(13, 'edit_roles', 'roles', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(14, 'add_roles', 'roles', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(15, 'delete_roles', 'roles', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(16, 'browse_users', 'users', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(17, 'read_users', 'users', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(18, 'edit_users', 'users', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(19, 'add_users', 'users', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(20, 'delete_users', 'users', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(21, 'browse_settings', 'settings', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(22, 'read_settings', 'settings', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(23, 'edit_settings', 'settings', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(24, 'add_settings', 'settings', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(25, 'delete_settings', 'settings', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(26, 'browse_hooks', NULL, '2020-10-29 10:28:56', '2020-10-29 10:28:56'),
(27, 'browse_gifts', 'gifts', '2020-10-29 14:15:49', '2020-10-29 14:15:49'),
(28, 'read_gifts', 'gifts', '2020-10-29 14:15:49', '2020-10-29 14:15:49'),
(29, 'edit_gifts', 'gifts', '2020-10-29 14:15:49', '2020-10-29 14:15:49'),
(30, 'add_gifts', 'gifts', '2020-10-29 14:15:49', '2020-10-29 14:15:49'),
(31, 'delete_gifts', 'gifts', '2020-10-29 14:15:49', '2020-10-29 14:15:49'),
(32, 'browse_boys', 'boys', '2020-10-29 14:40:03', '2020-10-29 14:40:03'),
(33, 'read_boys', 'boys', '2020-10-29 14:40:03', '2020-10-29 14:40:03'),
(34, 'edit_boys', 'boys', '2020-10-29 14:40:03', '2020-10-29 14:40:03'),
(35, 'add_boys', 'boys', '2020-10-29 14:40:03', '2020-10-29 14:40:03'),
(36, 'delete_boys', 'boys', '2020-10-29 14:40:03', '2020-10-29 14:40:03'),
(37, 'browse_froms', 'froms', '2020-10-29 14:40:13', '2020-10-29 14:40:13'),
(38, 'read_froms', 'froms', '2020-10-29 14:40:13', '2020-10-29 14:40:13'),
(39, 'edit_froms', 'froms', '2020-10-29 14:40:13', '2020-10-29 14:40:13'),
(40, 'add_froms', 'froms', '2020-10-29 14:40:13', '2020-10-29 14:40:13'),
(41, 'delete_froms', 'froms', '2020-10-29 14:40:13', '2020-10-29 14:40:13'),
(42, 'browse_girls', 'girls', '2020-10-29 14:40:30', '2020-10-29 14:40:30'),
(43, 'read_girls', 'girls', '2020-10-29 14:40:30', '2020-10-29 14:40:30'),
(44, 'edit_girls', 'girls', '2020-10-29 14:40:30', '2020-10-29 14:40:30'),
(45, 'add_girls', 'girls', '2020-10-29 14:40:30', '2020-10-29 14:40:30'),
(46, 'delete_girls', 'girls', '2020-10-29 14:40:30', '2020-10-29 14:40:30'),
(47, 'browse_hobbies', 'hobbies', '2020-10-29 14:40:38', '2020-10-29 14:40:38'),
(48, 'read_hobbies', 'hobbies', '2020-10-29 14:40:38', '2020-10-29 14:40:38'),
(49, 'edit_hobbies', 'hobbies', '2020-10-29 14:40:38', '2020-10-29 14:40:38'),
(50, 'add_hobbies', 'hobbies', '2020-10-29 14:40:38', '2020-10-29 14:40:38'),
(51, 'delete_hobbies', 'hobbies', '2020-10-29 14:40:38', '2020-10-29 14:40:38'),
(52, 'browse_achieves', 'achieves', '2020-10-29 14:43:25', '2020-10-29 14:43:25'),
(53, 'read_achieves', 'achieves', '2020-10-29 14:43:25', '2020-10-29 14:43:25'),
(54, 'edit_achieves', 'achieves', '2020-10-29 14:43:25', '2020-10-29 14:43:25'),
(55, 'add_achieves', 'achieves', '2020-10-29 14:43:25', '2020-10-29 14:43:25'),
(56, 'delete_achieves', 'achieves', '2020-10-29 14:43:25', '2020-10-29 14:43:25'),
(57, 'browse_orders', 'orders', '2020-10-29 14:53:26', '2020-10-29 14:53:26'),
(58, 'read_orders', 'orders', '2020-10-29 14:53:26', '2020-10-29 14:53:26'),
(59, 'edit_orders', 'orders', '2020-10-29 14:53:26', '2020-10-29 14:53:26'),
(60, 'add_orders', 'orders', '2020-10-29 14:53:26', '2020-10-29 14:53:26'),
(61, 'delete_orders', 'orders', '2020-10-29 14:53:26', '2020-10-29 14:53:26');

-- --------------------------------------------------------

--
-- Структура таблицы `permission_role`
--

CREATE TABLE `permission_role` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `permission_role`
--

INSERT INTO `permission_role` (`permission_id`, `role_id`) VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(33, 1),
(34, 1),
(35, 1),
(36, 1),
(37, 1),
(38, 1),
(39, 1),
(40, 1),
(41, 1),
(42, 1),
(43, 1),
(44, 1),
(45, 1),
(46, 1),
(47, 1),
(48, 1),
(49, 1),
(50, 1),
(51, 1),
(52, 1),
(53, 1),
(54, 1),
(55, 1),
(56, 1),
(57, 1),
(57, 2),
(58, 1),
(58, 2),
(59, 1),
(59, 2),
(60, 1),
(61, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `roles`
--

INSERT INTO `roles` (`id`, `name`, `display_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'Administrator', '2020-10-29 10:28:55', '2020-10-29 10:28:55'),
(2, 'manager', 'Менеджер', '2020-10-29 10:28:55', '2020-10-29 14:55:38');

-- --------------------------------------------------------

--
-- Структура таблицы `settings`
--

CREATE TABLE `settings` (
  `id` int UNSIGNED NOT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `details` text COLLATE utf8mb4_unicode_ci,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int NOT NULL DEFAULT '1',
  `group` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `settings`
--

INSERT INTO `settings` (`id`, `key`, `display_name`, `value`, `details`, `type`, `order`, `group`) VALUES
(1, 'site.title', 'Site Title', 'Site Title', '', 'text', 1, 'Site'),
(2, 'site.description', 'Site Description', 'Site Description', '', 'text', 2, 'Site'),
(3, 'site.logo', 'Site Logo', '', '', 'image', 3, 'Site'),
(4, 'site.google_analytics_tracking_id', 'Google Analytics Tracking ID', '', '', 'text', 4, 'Site'),
(5, 'admin.bg_image', 'Admin Background Image', '', '', 'image', 5, 'Admin'),
(6, 'admin.title', 'Admin Title', 'Voyager', '', 'text', 1, 'Admin'),
(7, 'admin.description', 'Admin Description', 'Welcome to Voyager. The Missing Admin for Laravel', '', 'text', 2, 'Admin'),
(8, 'admin.loader', 'Admin Loader', '', '', 'image', 3, 'Admin'),
(9, 'admin.icon_image', 'Admin Icon Image', '', '', 'image', 4, 'Admin'),
(10, 'admin.google_analytics_client_id', 'Google Analytics Client ID (used for admin dashboard)', '', '', 'text', 1, 'Admin');

-- --------------------------------------------------------

--
-- Структура таблицы `translations`
--

CREATE TABLE `translations` (
  `id` int UNSIGNED NOT NULL,
  `table_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `column_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foreign_key` int UNSIGNED NOT NULL,
  `locale` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'users/default.png',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `settings` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `role_id`, `name`, `email`, `avatar`, `email_verified_at`, `password`, `remember_token`, `settings`, `created_at`, `updated_at`) VALUES
(1, 1, 'Админ', 'pimax1978@icloud.com', 'users/default.png', NULL, '$2y$10$0TMXDkDv3Tz9G8at3djWL.Z84s1d6f0S0KPP3Gy1A6roFO65ab4RS', 'YWyIe4Zr2BIRBEt6Ig9ja9eBcYzw5VTCICMgjWO5b9TOoCYtqkMYtELJAxIw', '{\"locale\":\"ru\"}', NULL, NULL),
(2, 2, 'Manager', 'manager@kinder.com', 'users/default.png', NULL, '$2y$10$fJkQeS0nD5sMlrwNjV2gT.th3ingNrRjtHs8WurcRx.qETtvtToH.', 'VJ6gFQPaYPxRARffcq07atio6aBsGp9i0PTAWshtja3u1mHSIP1557mQnHeY', '{\"locale\":\"ru\"}', '2020-10-29 14:57:17', '2020-10-29 14:57:17');

-- --------------------------------------------------------

--
-- Структура таблицы `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `achieves`
--
ALTER TABLE `achieves`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `boys`
--
ALTER TABLE `boys`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `boys_value_unique` (`value`);

--
-- Индексы таблицы `data_rows`
--
ALTER TABLE `data_rows`
  ADD PRIMARY KEY (`id`),
  ADD KEY `data_rows_data_type_id_foreign` (`data_type_id`);

--
-- Индексы таблицы `data_types`
--
ALTER TABLE `data_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `data_types_name_unique` (`name`),
  ADD UNIQUE KEY `data_types_slug_unique` (`slug`);

--
-- Индексы таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Индексы таблицы `froms`
--
ALTER TABLE `froms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `froms_value_unique` (`value`);

--
-- Индексы таблицы `gifts`
--
ALTER TABLE `gifts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `girls`
--
ALTER TABLE `girls`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `girls_value_unique` (`value`);

--
-- Индексы таблицы `hobbies`
--
ALTER TABLE `hobbies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `hobbies_value_unique` (`value`);

--
-- Индексы таблицы `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `menus_name_unique` (`name`);

--
-- Индексы таблицы `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_items_menu_id_foreign` (`menu_id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_hash_index` (`hash`),
  ADD KEY `orders_email_hash_index` (`email_hash`);

--
-- Индексы таблицы `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Индексы таблицы `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `permissions_key_index` (`key`);

--
-- Индексы таблицы `permission_role`
--
ALTER TABLE `permission_role`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `permission_role_permission_id_index` (`permission_id`),
  ADD KEY `permission_role_role_id_index` (`role_id`);

--
-- Индексы таблицы `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Индексы таблицы `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `settings_key_unique` (`key`);

--
-- Индексы таблицы `translations`
--
ALTER TABLE `translations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `translations_table_name_column_name_foreign_key_locale_unique` (`table_name`,`column_name`,`foreign_key`,`locale`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- Индексы таблицы `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `user_roles_user_id_index` (`user_id`),
  ADD KEY `user_roles_role_id_index` (`role_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `achieves`
--
ALTER TABLE `achieves`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT для таблицы `boys`
--
ALTER TABLE `boys`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;

--
-- AUTO_INCREMENT для таблицы `data_rows`
--
ALTER TABLE `data_rows`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT для таблицы `data_types`
--
ALTER TABLE `data_types`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `froms`
--
ALTER TABLE `froms`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT для таблицы `gifts`
--
ALTER TABLE `gifts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT для таблицы `girls`
--
ALTER TABLE `girls`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=260;

--
-- AUTO_INCREMENT для таблицы `hobbies`
--
ALTER TABLE `hobbies`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT для таблицы `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT для таблицы `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `translations`
--
ALTER TABLE `translations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `data_rows`
--
ALTER TABLE `data_rows`
  ADD CONSTRAINT `data_rows_data_type_id_foreign` FOREIGN KEY (`data_type_id`) REFERENCES `data_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `menu_items`
--
ALTER TABLE `menu_items`
  ADD CONSTRAINT `menu_items_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `permission_role`
--
ALTER TABLE `permission_role`
  ADD CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Ограничения внешнего ключа таблицы `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_roles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
