-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26/01/2024 às 15:59
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `camera-nvr`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `id_` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `id_`, `nome`, `email`, `password`) VALUES
(1, '12', 'guilhermer', 'guilherme@g.com', '123'),
(7, 'daa0b4f3-8529-4176-b173-947d4692f556', '', 'teste@g.com', '$2a$10$TC79pOYnOK.voZE/V57Jw.pSoL77WdgdLKezDKxyvBk'),
(8, 'f1f5af1c-0af9-4919-bf38-8440f1c5bdc9', '', 'Wol@gmail.com', '$2a$10$EZcTS5DWhdNBWSsr5LEbcOHdl5gHZZ9zuHDbYomuQqv'),
(9, '7afa1cf8-9f76-497d-b9b2-1c657c980f88', '', 'qqq@asd.com', '$2a$10$uCnGkOKFV3sftph6WD3gR.a3S5JMAZl7uZOHVQKrcHy'),
(11, 'bf92efb2-9193-46e5-b7ab-6f5ca4a93814', '', 'teste@teste.com', '$2a$10$nZ7zlXcc7qyqWTRK2PiNK.E0zaF/yPneQ4YmryirzxLYqPWFG7H6C');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
