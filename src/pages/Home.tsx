import React from "react";
import { Typography, Button, Row, Col, Card, Space, Carousel, Tag } from "antd";
import {
  ArrowRight,
  Building2,
  HardHat,
  Ruler,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { primaryYellow } from "../theme/themeConfig";

const { Title, Paragraph, Text } = Typography;

const CustomArrow = ({
  className,
  style,
  onClick,
  direction,
}: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  direction: "left" | "right";
}) => (
  <motion.button
    className={className}
    whileHover="hover"
    whileTap={{ scale: 0.9 }}
    variants={{
      hover: {
        scale: 1.05,
        borderColor: "rgba(250, 205, 0, 0.6)",
        boxShadow: "0 0 25px rgba(250, 205, 0, 0.15)",
        backgroundColor: "rgba(250, 205, 0, 0.08)",
      },
    }}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      zIndex: 10,
      border: "1px solid rgba(255,255,255,0.2)",
      cursor: "pointer",
      color: "#facd00",
      top: "50%",
      transform: "translateY(-50%)",
      [direction === "left" ? "left" : "right"]: "30px",
      padding: 0,
      lineHeight: 1,
      transition:
        "border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
    }}
    onClick={onClick}
  >
    <motion.div
      variants={{
        hover: { x: direction === "left" ? -2 : 2 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {direction === "left" ? (
        <ChevronLeft size={24} style={{ display: "block" }} />
      ) : (
        <ChevronRight size={24} style={{ display: "block" }} />
      )}
    </motion.div>
  </motion.button>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Home: React.FC = () => {
  return (
    <div
      className="home-container"
      style={{ overflow: "hidden", minHeight: "100vh" }}
    >
      {/* Hero Section */}
      <motion.section
        className="hero-gradient"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ padding: "100px 24px", textAlign: "center" }}
      >
        <motion.div variants={itemVariants}>
          <Title
            level={1}
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: 900,
              marginBottom: "24px",
              lineHeight: 1.1,
            }}
          >
            Construimos <span style={{ color: primaryYellow }}>Realidades</span>
          </Title>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Paragraph
            style={{
              fontSize: "20px",
              maxWidth: "800px",
              margin: "0 auto 40px auto",
              color: "#888",
              lineHeight: 1.6,
            }}
          >
            Liderando el futuro de la construcción con innovación, diseño
            sostenible y excelencia en cada detalle. Transformamos visiones en
            estructuras icónicas.
          </Paragraph>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Space size="large">
            <Button
              type="primary"
              size="large"
              style={{
                height: "56px",
                padding: "0 40px",
                fontSize: "16px",
                boxShadow: `0 8px 24px ${primaryYellow}44`,
              }}
            >
              Nuestros Proyectos
            </Button>
            <Button
              size="large"
              className="secondary-button"
              style={{
                height: "56px",
                padding: "0 40px",
                fontSize: "16px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Space>
                Contáctanos
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Space>
            </Button>
          </Space>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        style={{ padding: "100px 24px", maxWidth: "1300px", margin: "0 auto" }}
      >
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <motion.div variants={itemVariants}>
              <Card
                className="hover-card"
                bordered={false}
                style={{ height: "100%", background: "transparent" }}
              >
                <div style={{ padding: "20px" }}>
                  <Building2
                    size={48}
                    color={primaryYellow}
                    style={{ marginBottom: 24 }}
                  />
                  <Title level={3}>Diseño Residencial</Title>
                  <Paragraph style={{ fontSize: "16px", color: "#666" }}>
                    Creamos hogares que inspiran, combinando funcionalidad
                    moderna con una estética atemporal que perdura por
                    generaciones.
                  </Paragraph>
                </div>
              </Card>
            </motion.div>
          </Col>
          <Col xs={24} md={8}>
            <motion.div variants={itemVariants}>
              <Card
                className="hover-card"
                bordered={false}
                style={{ height: "100%", background: "transparent" }}
              >
                <div style={{ padding: "20px" }}>
                  <HardHat
                    size={48}
                    color={primaryYellow}
                    style={{ marginBottom: 24 }}
                  />
                  <Title level={3}>Infraestructura</Title>
                  <Paragraph style={{ fontSize: "16px", color: "#666" }}>
                    Proyectos de gran escala que conectan comunidades y
                    fortalecen el crecimiento económico del país.
                  </Paragraph>
                </div>
              </Card>
            </motion.div>
          </Col>
          <Col xs={24} md={8}>
            <motion.div variants={itemVariants}>
              <Card
                className="hover-card"
                bordered={false}
                style={{ height: "100%", background: "transparent" }}
              >
                <div style={{ padding: "20px" }}>
                  <Ruler
                    size={48}
                    color={primaryYellow}
                    style={{ marginBottom: 24 }}
                  />
                  <Title level={3}>Arquitectura</Title>
                  <Paragraph style={{ fontSize: "16px", color: "#666" }}>
                    Visión arquitectónica que desafía los límites de lo posible,
                    optimizando cada espacio para el bienestar humano.
                  </Paragraph>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        style={{
          padding: "60px 24px",
          background: `linear-gradient(135deg, ${primaryYellow} 0%, #ffd700 100%)`,
          margin: "0 40px",
          borderRadius: "32px",
          position: "relative",
          overflow: "hidden",
          boxShadow: `0 20px 40px ${primaryYellow}33`,
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: -50,
            right: -50,
            width: "200px",
            height: "200px",
            background: "#fff",
            borderRadius: "40px",
          }}
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: -30,
            left: "10%",
            width: "100px",
            height: "100px",
            background: "#000",
            borderRadius: "50%",
          }}
        />
        <Row gutter={[32, 32]} justify="center">
          {[
            { label: "Proyectos Terminados", value: "250+" },
            { label: "Años de Experiencia", value: "20" },
            { label: "Premios Ganados", value: "15" },
            { label: "Clientes Felices", value: "500+" },
          ].map((stat) => (
            <Col
              xs={12}
              md={6}
              key={stat.label}
              style={{ textAlign: "center" }}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{ position: "relative", zIndex: 1 }}
              >
                <Title
                  level={2}
                  style={{
                    margin: 0,
                    color: "#000",
                    fontWeight: 900,
                    fontSize: "3rem",
                  }}
                >
                  {stat.value}
                </Title>
                <Text
                  style={{
                    color: "#000",
                    opacity: 0.7,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontSize: "12px",
                  }}
                >
                  {stat.label}
                </Text>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.section>

      {/* Featured Projects Section */}
      <section
        style={{ padding: "100px 24px", maxWidth: "1300px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <Title level={2}>
            Proyectos <span style={{ color: primaryYellow }}>Destacados</span>
          </Title>
          <Paragraph style={{ color: "#888", fontSize: "16px" }}>
            Una mirada a nuestras construcciones más emblemáticas.
          </Paragraph>
        </div>
        <Carousel
          autoplay
          autoplaySpeed={4000}
          dots
          arrows
          prevArrow={<CustomArrow direction="left" />}
          nextArrow={<CustomArrow direction="right" />}
          draggable
          infinite
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            { breakpoint: 1200, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
          ]}
          style={{ marginBottom: 40, padding: "0 20px" }}
        >
          {[
            {
              title: "Torre Esmeralda",
              location: "Santo Domingo",
              img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
            },
            {
              title: "Residencial Brisa",
              location: "Punta Cana",
              img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070",
            },
            {
              title: "Estación Central",
              location: "La Romana",
              img: "https://images.unsplash.com/photo-1769028715040-16cb345ced84?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "Hotel Marina",
              location: "Puerto Plata",
              img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070",
            },
          ].map((project, i) => (
            <div key={project.title} style={{ padding: "10px" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ position: "relative", height: "480px" }}
              >
                <motion.div
                  whileHover="hover"
                  initial="initial"
                  style={{
                    position: "relative",
                    borderRadius: "32px",
                    overflow: "hidden",
                    cursor: "pointer",
                    height: "100%",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.1 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Overlay Gradient */}
                  <motion.div
                    variants={{
                      initial: { opacity: 0.6 },
                      hover: { opacity: 0.8 },
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                    }}
                  />

                  {/* Content */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "40px",
                      zIndex: 2,
                    }}
                  >
                    <motion.div
                      variants={{
                        initial: { y: 0 },
                        hover: { y: -10 },
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Tag
                        color={primaryYellow}
                        style={{
                          color: "#000",
                          marginBottom: 16,
                          fontWeight: 600,
                          borderRadius: "6px",
                          padding: "4px 12px",
                          border: "none",
                        }}
                      >
                        {project.location}
                      </Tag>
                      <Title
                        level={3}
                        style={{
                          color: "#fff",
                          margin: 0,
                          fontWeight: 800,
                          fontSize: "24px",
                        }}
                      >
                        {project.title}
                      </Title>
                    </motion.div>

                    <motion.div
                      variants={{
                        initial: { opacity: 0, y: 10 },
                        hover: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.4 }}
                      style={{ marginTop: 20 }}
                    >
                      <Button
                        type="primary"
                        icon={<ExternalLink size={16} />}
                        className="project-action-btn shine-effect"
                        style={{
                          borderRadius: "14px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          height: "48px",
                          padding: "0 24px",
                          background: `linear-gradient(135deg, ${primaryYellow} 0%, #ffd700 100%)`,
                          border: "none",
                          color: "#000",
                          fontWeight: 700,
                          boxShadow: `0 8px 16px ${primaryYellow}33`,
                          transition:
                            "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        }}
                      >
                        Ver Detalles
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Featured Image Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          height: "500px",
          background:
            'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070") center/cover no-repeat',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderRadius: "32px",
          margin: "100px 40px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
          }}
        />
        <div
          style={{
            position: "relative",
            textAlign: "center",
            color: "#fff",
            padding: "0 24px",
          }}
        >
          <Title
            level={2}
            style={{ color: "#fff", fontSize: "3rem", marginBottom: "16px" }}
          >
            Compromiso con la Calidad
          </Title>
          <Text style={{ color: "#eee", fontSize: "18px" }}>
            Utilizamos los mejores materiales y técnicas de construcción de
            vanguardia.
          </Text>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
