import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Phone, MapPin, Clock, Star, CheckCircle2, Ruler, Hammer, Wrench, Truck, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-floor.jpg";
import beforeAfter from "@/assets/before-after.jpg";
import workLaminate from "@/assets/work-laminate.jpg";
import workScreed from "@/assets/work-screed.jpg";
import workParquet from "@/assets/work-parquet.jpg";

const PHONE_DISPLAY = "+7 (495) 000-00-00";
const PHONE_HREF = "tel:+74950000000";

const services = [
  { title: "Стяжка пола", desc: "Полусухая и мокрая стяжка от 30 м². Ровность по СНиП.", price: "от 750 ₽/м²" },
  { title: "Наливной пол", desc: "Самовыравнивающиеся смеси, перепад до 2 мм на 2 м.", price: "от 550 ₽/м²" },
  { title: "Укладка ламината", desc: "32–34 класс, замковое соединение, подложка в подарок.", price: "от 350 ₽/м²" },
  { title: "Паркет и паркетная доска", desc: "Ёлочка, палуба, реставрация старого паркета.", price: "от 700 ₽/м²" },
  { title: "Линолеум и кварцвинил", desc: "С подгонкой швов и плинтусом под ключ.", price: "от 300 ₽/м²" },
  { title: "Демонтаж старых покрытий", desc: "Вывоз мусора, уборка после работ.", price: "от 200 ₽/м²" },
];

const process = [
  { icon: Phone, title: "Заявка", text: "Принимаем звонок или форму, уточняем объём." },
  { icon: Ruler, title: "Замер", text: "Бесплатный выезд по Москве в течение суток." },
  { icon: Wrench, title: "Смета", text: "Фиксированная цена в договоре, без доплат." },
  { icon: Hammer, title: "Работы", text: "Соблюдаем сроки. Чистая площадка каждый день." },
  { icon: ShieldCheck, title: "Гарантия", text: "До 3 лет на работы. Акт сдачи-приёмки." },
];

const reviews = [
  { name: "Анна К.", text: "Делали стяжку и ламинат в трёшке на Соколе. Уложились в неделю, мусор вывезли. Цена не выросла.", rating: 5 },
  { name: "Дмитрий П.", text: "Бригада аккуратная, всё под защитной плёнкой. Паркет ёлочкой положили идеально.", rating: 5 },
  { name: "Ирина С.", text: "Понравилось, что сразу прислали смету и договор. По факту — без сюрпризов.", rating: 5 },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", area: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Заполните имя и телефон", variant: "destructive" });
      return;
    }
    toast({ title: "Заявка отправлена", description: "Перезвоним в течение 15 минут." });
    setForm({ name: "", phone: "", area: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-[image:var(--gradient-accent)] grid place-items-center text-primary-foreground font-extrabold">Р</div>
            <div className="leading-tight">
              <div className="font-bold text-lg">Ремстрой</div>
              <div className="text-xs text-muted-foreground">Полы в Москве с 2020 г.</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#services" className="hover:text-primary">Услуги</a>
            <a href="#works" className="hover:text-primary">Работы</a>
            <a href="#process" className="hover:text-primary">Процесс</a>
            <a href="#contacts" className="hover:text-primary">Контакты</a>
          </nav>
          <a href={PHONE_HREF} className="hidden sm:inline-flex items-center gap-2 font-semibold text-sm hover:text-primary">
            <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <img src={heroImg} alt="Уложенный паркет в московской квартире" width={1600} height={1024} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container relative py-20 md:py-32 text-primary-foreground">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-background/15 backdrop-blur px-3 py-1.5 rounded-full text-sm mb-6 border border-white/20">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span>4.8 на Яндекс.Картах · 44 отзыва · 5 лет в Москве</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-5">
              Ремонт полов в Москве<br />под ключ за 5–10 дней
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-xl">
              Стяжка, ламинат, паркет, наливные полы. Бесплатный замер, фиксированная смета, гарантия до 3 лет.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-[image:var(--gradient-accent)] hover:opacity-95 text-primary-foreground font-semibold h-14 px-7 text-base">
                <a href="#request">Получить смету за 1 час</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/10 border-white/30 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground h-14 px-7 text-base">
                <a href={PHONE_HREF}><Phone className="w-4 h-4 mr-2" />{PHONE_DISPLAY}</a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {[
                ["5 лет", "на рынке"],
                ["44+", "отзыва 4.8★"],
                ["3 года", "гарантия"],
              ].map(([n, t]) => (
                <div key={n} className="border-l-2 border-primary pl-3">
                  <div className="text-2xl md:text-3xl font-extrabold">{n}</div>
                  <div className="text-sm text-white/75">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {[
            [CheckCircle2, "Договор и смета"],
            [Truck, "Выезд по всей Москве"],
            [ShieldCheck, "Гарантия до 3 лет"],
            [Clock, "Сроки от 5 дней"],
          ].map(([Icon, t]: any) => (
            <div key={t} className="flex items-center gap-2.5">
              <Icon className="w-5 h-5 text-primary shrink-0" />
              <span className="font-medium">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-24">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="text-sm font-semibold text-primary mb-2">УСЛУГИ</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Что мы делаем с полами</h2>
            <p className="text-muted-foreground">Полный цикл — от демонтажа до финишного покрытия. Работаем в квартирах, офисах и коммерческих помещениях.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Card key={s.title} className="p-6 hover:shadow-[var(--shadow-elevated)] transition-shadow border-border">
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{s.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-bold text-primary">{s.price}</span>
                  <a href="#request" className="text-sm font-semibold hover:text-primary">Заказать →</a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Works / Before-After */}
      <section id="works" className="py-20 md:py-24 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="text-sm font-semibold text-primary mb-2">НАШИ РАБОТЫ</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Было / стало</h2>
            <p className="text-muted-foreground">Реальные объекты в Москве. Полную галерею покажем при замере.</p>
          </div>
          <Card className="overflow-hidden mb-6 border-border">
            <img src={beforeAfter} alt="Ремонт паркета: до и после" width={1280} height={800} loading="lazy" className="w-full h-auto" />
          </Card>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { img: workLaminate, t: "Ламинат, 62 м²", a: "ЖК «Символ», р-н Лефортово" },
              { img: workScreed, t: "Полусухая стяжка, 95 м²", a: "ул. Профсоюзная" },
              { img: workParquet, t: "Паркет ёлочкой, 48 м²", a: "Сретенский б-р" },
            ].map((w) => (
              <Card key={w.t} className="overflow-hidden group border-border">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={w.img} alt={w.t} width={1024} height={768} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold mb-1">{w.t}</h3>
                  <p className="text-sm text-muted-foreground">{w.a}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 md:py-24">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="text-sm font-semibold text-primary mb-2">КАК РАБОТАЕМ</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">5 шагов до готового пола</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <div key={p.title} className="relative">
                <div className="bg-card border border-border rounded-lg p-5 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-md bg-primary/10 grid place-items-center text-primary">
                      <p.icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-extrabold text-muted-foreground/40">0{i + 1}</span>
                  </div>
                  <h3 className="font-bold mb-1.5">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-24 bg-secondary/40">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-sm font-semibold text-primary mb-2">ОТЗЫВЫ</div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">4.8 на Яндекс.Картах</h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}</div>
                <span>· 44 отзыва клиентов</span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <Card key={r.name} className="p-6 border-border">
                <div className="flex mb-3">{[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}</div>
                <p className="text-foreground/90 mb-4 leading-relaxed">«{r.text}»</p>
                <div className="font-semibold text-sm">{r.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="py-20 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-sm font-semibold text-primary mb-2">ЗАЯВКА</div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Получите смету за 1 час</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Оставьте контакты — перезвоним в течение 15 минут, уточним детали и пришлём приблизительную смету. Замер по Москве — бесплатно.
              </p>
              <ul className="space-y-3">
                {["Фиксированная цена в договоре", "Без предоплаты за выезд", "Свои материалы или ваши — по факту"].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-6 md:p-8 border-border shadow-[var(--shadow-elevated)]">
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Ваше имя</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Иван" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Телефон *</label>
                  <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" type="tel" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Площадь, м²</label>
                  <Input value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} placeholder="например, 60" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Что нужно сделать</label>
                  <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Стяжка + ламинат в двушке" rows={3} />
                </div>
                <Button type="submit" size="lg" className="w-full h-13 bg-[image:var(--gradient-accent)] text-primary-foreground font-semibold h-14 text-base">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-foreground text-background">
        <div className="container grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md bg-[image:var(--gradient-accent)] grid place-items-center font-extrabold text-primary-foreground">Р</div>
              <div className="font-bold text-lg">Ремстрой</div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Ремонт и укладка полов в Москве с 2020 года. Работаем по договору, с гарантией.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a href={PHONE_HREF} className="hover:text-primary">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-background/80">Москва, выезд во все районы и ЦАО, ЮАО, САО, ВАО, ЗАО</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-background/80">Пн–Вс, 9:00–21:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Найдите нас</h3>
            <a
              href="https://yandex.ru/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm bg-background/10 hover:bg-background/15 px-4 py-2.5 rounded-md border border-background/20 transition-colors"
            >
              <Star className="w-4 h-4 fill-primary text-primary" />
              4.8 на Яндекс.Картах — 44 отзыва
            </a>
          </div>
        </div>
        <div className="container mt-10 pt-6 border-t border-background/15 text-xs text-background/60 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Ремстрой. Все права защищены.</span>
          <span>ИП · Москва</span>
        </div>
      </section>
    </div>
  );
};

export default Index;
