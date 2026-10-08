import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  name = 'Otávio Alexandre';
  role = 'Java Back-End Developer & Software Engineer';
  
  skills = [
    { name: 'Java', desc: 'Linguagem Principal' },
    { name: 'Spring Boot', desc: 'Framework' },
    { name: 'Clean Arch', desc: 'Arquitetura' },
    { name: 'Spring Security', desc: 'Autenticação' },
    { name: 'SQL / JPA', desc: 'Banco de Dados' },
    { name: 'Git & GitHub', desc: 'Versionamento' },
    { name: 'Docker', desc: 'Containerização' },
    { name: 'SOLID & OOP', desc: 'Boas Práticas' }
  ];

  experiences = [
    {
      type: 'Pós-Graduação & Especialização',
      title: 'Pós-Graduação em Arquitetura e Desenvolvimento Back-End',
      desc: 'Foco em padrões de projeto avançados, microsserviços, API RESTful e Clean Architecture.'
    },
    {
      type: 'Formação Contínua (Alura & Especializações)',
      title: 'Desenvolvedor Back-End Java Specialist',
      desc: 'Aprofundamento prático em Spring Boot, Spring Security, JPA/Hibernate, Banco de Dados Relacionais e Testes Unitários.'
    },
    {
      type: 'Graduação',
      title: 'Formação Acadêmica Superior',
      desc: 'Base sólida em algoritmos, estruturas de dados, lógica de programação e engenharia de software.'
    }
  ];

  projects = [
    {
      title: 'Desafio Itaú Back-End',
      description: 'Implementação robusta de API REST em Java com Spring Boot seguindo rigorosamente os princípios de Clean Architecture, tratamento de exceções e validações.',
      techs: ['Java', 'Spring Boot', 'Clean Architecture', 'REST API'],
      link: 'https://github.com/Zerphyis',
      badge: 'Destaque Principal'
    },
    {
      title: 'RabbitMicro',
      description: 'Plataforma de adoção de animais com microsserviços em Java e comunicação assíncrona via RabbitMQ, com produtores e consumidores desacoplados[cite: 3].',
      techs: ['Java', 'Spring Boot', 'RabbitMQ', 'Microsserviços'],
      link: 'https://github.com/Zerphyis/RabbitMicro',
      badge: 'Microsserviços'
    },
    {
      title: 'PicPay Simpl',
      description: 'API RESTful em Java 17/Spring Boot simulando transferências entre usuários, persistência com JPA/Hibernate, MySQL e Flyway[cite: 3].',
      techs: ['Java 17', 'Spring Boot', 'MySQL', 'Flyway'],
      link: 'https://github.com/Zerphyis/Picpay-simp',
      badge: 'API REST'
    },
    {
      title: 'Adopet',
      description: 'API RESTful em Java para gestão de tutores, animais e abrigos, com autenticação por perfil e regras de negócio estruturadas em camadas[cite: 3].',
      techs: ['Java', 'Spring Boot', 'MySQL', 'DTO/Service'],
      link: 'https://github.com/Zerphyis/Adopet',
      badge: 'Regras de Negócio'
    },
    {
      title: 'OpenSocure',
      description: 'E-commerce colaborativo com API RESTful em Java e Spring Boot, utilizando JPA, DTOs, validações, JWT, DDD e SOLID[cite: 3].',
      techs: ['Java', 'Spring Boot', 'DDD/SOLID', 'JWT'],
      link: 'https://github.com/NucleoDevCodes/Api-E-commerce',
      badge: 'Projeto Colaborativo'
    }
  ];

  certificationsList = [
    { title: 'Arquitetura Java: Clean Architecture & DDD', desc: 'Formação avançada em design de código, desacoplamento de camadas e modelagem de domínio com Domain-Driven Design.', status: 'Alura • 24h' },
    { title: 'Microsserviços, Spring e RabbitMQ', desc: 'Implementação de arquitetura distribuída, comunicação assíncrona baseada em filas e mensageria corporativa.', status: 'Alura • 38h' },
    { title: 'Java com Spring Security & APIs REST', desc: 'Proteção avançada de aplicações web, controle de acesso por perfis, tokens JWT e segurança corporativa.', status: 'Alura • 40h' },
    { title: 'Aprofunde em Java: JVM, Threads e Memória', desc: 'Gestão de performance, multithreading, reflection, manipulação de exceções e otimização de bytecode.', status: 'Alura • 42h' },
    { title: 'DevOps & Cloud-Native: Docker & Kubernetes', desc: 'Containerização de aplicações, orquestração com Kubernetes, automação de pipelines de build e deploy.', status: 'Alura • 126h' },
    { title: 'Modelagem de Dados e Consultas MySQL', desc: 'Construção de modelos lógicos/físicos, normalização de dados, procedures, funções e consultas avançadas.', status: 'Alura • 70h' }
  ];
}