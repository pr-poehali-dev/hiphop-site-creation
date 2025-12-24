import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const events = [
    {
      id: 1,
      title: "Underground Battle 2024",
      date: "15 января 2024",
      location: "Москва, Клуб A2",
      price: "1500₽",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Rap Fest Moscow",
      date: "22 февраля 2024",
      location: "Москва, Известия Hall",
      price: "2000₽",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Street Cypher Night",
      date: "10 марта 2024",
      location: "СПб, Aurora Concert Hall",
      price: "1200₽",
      image: "/placeholder.svg"
    }
  ];

  const artists = [
    {
      id: 1,
      name: "MC Shadow",
      genre: "Underground Rap",
      image: "/placeholder.svg",
      followers: "125K"
    },
    {
      id: 2,
      name: "Beatbox King",
      genre: "Beatbox / Hip-Hop",
      image: "/placeholder.svg",
      followers: "89K"
    },
    {
      id: 3,
      name: "DJ Vinyl",
      genre: "Turntablism",
      image: "/placeholder.svg",
      followers: "156K"
    },
    {
      id: 4,
      name: "Street Poet",
      genre: "Conscious Rap",
      image: "/placeholder.svg",
      followers: "203K"
    }
  ];

  const news = [
    {
      id: 1,
      title: "Новый альбом MC Shadow бьет все рекорды",
      date: "2 дня назад",
      category: "Релизы",
      excerpt: "Подземный артист выпустил долгожданный альбом, который за первые сутки собрал более 2 миллионов прослушиваний."
    },
    {
      id: 2,
      title: "Hip-Hop Awards 2024: объявлены номинанты",
      date: "5 дней назад",
      category: "Награды",
      excerpt: "Церемония награждения пройдет в марте. В списке номинантов — самые яркие имена российской хип-хоп сцены."
    },
    {
      id: 3,
      title: "Street Art Festival: граффити встречает рэп",
      date: "1 неделю назад",
      category: "События",
      excerpt: "Фестиваль объединит лучших граффити-художников и рэп-исполнителей в одном пространстве."
    },
    {
      id: 4,
      title: "Beatbox Battle: итоги чемпионата",
      date: "2 недели назад",
      category: "Батлы",
      excerpt: "Завершился крупнейший битбокс-батл года. Победитель получил главный приз в 500 000 рублей."
    }
  ];

  const tickerItems = [
    "🎤 Underground Battle 2024 — 15 января",
    "🔥 Новый альбом MC Shadow уже в сети",
    "🏆 Hip-Hop Awards — голосование открыто",
    "📍 Rap Fest Moscow — 22 февраля",
    "💿 Street Cypher Night в Питере",
    "⚡ Beatbox Battle — смотри итоги",
    "🎵 Лучшие треки недели на Street Beats"
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Music" className="text-primary" size={32} />
              <h1 className="text-2xl font-oswald font-bold text-primary">STREET BEATS</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#events" className="text-foreground/80 hover:text-primary transition-colors font-medium">События</a>
              <a href="#artists" className="text-foreground/80 hover:text-primary transition-colors font-medium">Артисты</a>
              <a href="#news" className="text-foreground/80 hover:text-primary transition-colors font-medium">Новости</a>
              <Button className="bg-primary hover:bg-primary/90">Купить билет</Button>
            </div>
            <button className="md:hidden">
              <Icon name="Menu" size={28} />
            </button>
          </div>
        </nav>
      </header>

      <div className="bg-primary/10 border-y border-primary/20 py-3 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-8 text-sm font-medium text-foreground/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/f29328d7-0554-45ad-b0b0-d0edfcf7a0f1/files/9581e19b-4c96-4be1-b4fa-eab0039f0554.jpg" 
            alt="background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-2 bg-primary/20 text-primary border-primary/30">
              🎤 Hip-Hop Culture Hub
            </Badge>
            <h1 className="text-5xl md:text-7xl font-oswald font-bold mb-6 leading-tight">
              УЛИЧНАЯ КУЛЬТУРА
              <span className="block text-primary mt-2">В КАЖДОМ БИТЕ</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Погрузись в мир хип-хопа: события, артисты, новости и вся энергия улиц в одном месте
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Ticket" className="mr-2" size={20} />
                Купить билеты
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:bg-primary/10">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-2">БЛИЖАЙШИЕ СОБЫТИЯ</h2>
              <p className="text-foreground/60 text-lg">Не пропусти самые горячие выступления</p>
            </div>
            <Button variant="ghost" className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80">
              Все события
              <Icon name="ArrowRight" size={20} />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card 
                key={event.id} 
                className="overflow-hidden hover:scale-105 transition-transform duration-300 bg-card border-border/40 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">{event.price}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-oswald font-semibold mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                  <div className="space-y-2 text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                    Купить билет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="artists" className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-2">АРТИСТЫ</h2>
            <p className="text-foreground/60 text-lg">Голоса улиц и короли микрофона</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.map((artist, index) => (
              <Card 
                key={artist.id}
                className="overflow-hidden hover:scale-105 transition-transform duration-300 bg-card border-border/40 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 bg-muted overflow-hidden">
                  <img src={artist.image} alt={artist.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-oswald font-bold mb-1">{artist.name}</h3>
                    <p className="text-sm text-foreground/70 mb-2">{artist.genre}</p>
                    <div className="flex items-center gap-2 text-primary">
                      <Icon name="Users" size={14} />
                      <span className="text-xs font-medium">{artist.followers} подписчиков</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-2">НОВОСТИ</h2>
              <p className="text-foreground/60 text-lg">Главное из мира рэпа и хип-хопа</p>
            </div>
            <Button variant="ghost" className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80">
              Все новости
              <Icon name="ArrowRight" size={20} />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((item, index) => (
              <Card 
                key={item.id}
                className="overflow-hidden hover:border-primary/50 transition-all duration-300 bg-card border-border/40 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-foreground/50">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-oswald font-semibold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-12 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Music" className="text-primary" size={28} />
                <h3 className="text-xl font-oswald font-bold text-primary">STREET BEATS</h3>
              </div>
              <p className="text-foreground/60 text-sm">
                Твой проводник в мире хип-хоп культуры
              </p>
            </div>
            
            <div>
              <h4 className="font-oswald font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#events" className="hover:text-primary transition-colors">События</a></li>
                <li><a href="#artists" className="hover:text-primary transition-colors">Артисты</a></li>
                <li><a href="#news" className="hover:text-primary transition-colors">Новости</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-oswald font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнеры</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-oswald font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="Music" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/40 pt-8 text-center text-foreground/60 text-sm">
            <p>© 2024 Street Beats. Вся уличная культура в одном месте.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;