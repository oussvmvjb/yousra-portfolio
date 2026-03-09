import { Component, OnInit, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import * as AOS from 'aos';
import Typed from 'typed.js';
import { ThemeService } from './services/theme.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'yousra_portfolio';
  isDarkMode = false;
  currentLanguage = 'fr';
  isNavbarCollapsed = true;
  private typed: Typed | undefined;
  private particles: any[] = [];
  private animationFrameId: number | undefined;
  private ctx: CanvasRenderingContext2D | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private mouse = { x: 0, y: 0, radius: 150 };

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe(
      (isDark) => (this.isDarkMode = isDark)
    );
    this.languageService.currentLang$.subscribe(
      (lang) => (this.currentLanguage = lang)
    );
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  switchLanguage(lang: string, event: Event) {
    event.preventDefault();
    this.languageService.changeLanguage(lang);
  }

  ngAfterViewInit() {
    this.initAOS();
    this.initTyped();
    this.initParticleSystem();
    this.initCustomCursor();
  }

  ngOnDestroy() {
    if (this.typed) this.typed.destroy();
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
    this.updateParallax(event);
    this.updateCustomCursor(event);
  }

  @HostListener('window:resize')
  onResize() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.initParticles();
    }
  }

  private initAOS() {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 120
    });
  }

  private initTyped() {
    const options = {
      strings: [
        'Développeur Fullstack',
        'Passionné par Symfony',
        'Expert PHP',
        'Curieux & Innovant'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true
    };
    if (document.getElementById('typed')) {
      this.typed = new Typed('#typed', options);
    }
  }

  private initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      const activeElements = document.querySelectorAll('a, button, .btn, .nav-link, #theme-toggle');
      activeElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
      });

      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('explore'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('explore'));
      });
    }
  }

  private updateCustomCursor(e: MouseEvent) {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    if (cursor) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    }
  }

  private updateParallax(e: MouseEvent) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    const parallaxBg = document.querySelectorAll('.parallax-bg') as NodeListOf<HTMLElement>;
    parallaxBg.forEach(el => {
      const speed = Number(el.dataset['speed']) || 30;
      const x = (mouseX - 0.5) * speed;
      const y = (mouseY - 0.5) * speed;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  private initParticleSystem() {
    this.canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.initParticles();
      this.animateParticles();
    }
  }

  private initParticles() {
    this.particles = [];
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(new Particle(this.canvas!));
    }
  }

  private animateParticles() {
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (const particle of this.particles) {
        particle.draw(this.ctx, this.isDarkMode);
        particle.update(this.mouse);
      }
    }
    this.animationFrameId = requestAnimationFrame(() => this.animateParticles());
  }

  @HostListener('mousemove', ['$event'])
  onMagneticMove(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const magneticEl = target.closest('.magnetic') as HTMLElement;
    if (magneticEl) {
      const pos = magneticEl.getBoundingClientRect();
      const mouseX = e.clientX - pos.left - pos.width / 2;
      const mouseY = e.clientY - pos.top - pos.height / 2;
      magneticEl.style.transform = `translate(${mouseX * 0.4}px, ${mouseY * 0.4}px)`;
    }
  }

  @HostListener('mouseout', ['$event'])
  onMagneticLeave(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const magneticEl = target.closest('.magnetic') as HTMLElement;
    if (magneticEl) {
      magneticEl.style.transform = 'translate(0px, 0px)';
    }
  }
}

class Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  shape: string;
  rotation: number;
  rotationSpeed: number;

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 8 + 4;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = (Math.random() * 30) + 1;
    this.shape = Math.random() > 0.5 ? 'square' : 'triangle';
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
  }

  draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(207, 146, 189, 0.2)';
    ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(207, 146, 189, 0.05)';
    ctx.lineWidth = 1;

    if (this.shape === 'square') {
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size);
    } else {
      ctx.beginPath();
      ctx.moveTo(0, -this.size / 2);
      ctx.lineTo(this.size / 2, this.size / 2);
      ctx.lineTo(-this.size / 2, this.size / 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();
  }

  update(mouse: { x: number, y: number, radius: number }) {
    this.rotation += this.rotationSpeed;
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius) {
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      let maxDistance = mouse.radius;
      let force = (maxDistance - distance) / maxDistance;
      let directionX = forceDirectionX * force * this.density;
      let directionY = forceDirectionY * force * this.density;
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 20;
      }
    }
  }
}
