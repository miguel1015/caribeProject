import React from "react";
import { Typography, Row, Col, Card, Timeline, Tag } from "antd";
import { motion } from "framer-motion";
import { Users, Rocket, Award } from "lucide-react";
import { primaryYellow } from "../theme/themeConfig";

const { Title, Paragraph, Text } = Typography;

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const teamMembers = [
    {
      name: "Carlos Rivera",
      role: "Director General",
      img: "https://i.pravatar.cc/300?u=carlos",
    },
    {
      name: "Elena Sanz",
      role: "Arquitecta Principal",
      img: "https://i.pravatar.cc/300?u=elena",
    },
    {
      name: "Marco Polo",
      role: "Jefe de Obra",
      img: "https://i.pravatar.cc/300?u=marco",
    },
  ];

  return (
    <div style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <Tag
            color={primaryYellow}
            style={{
              color: "#000",
              fontWeight: 600,
              padding: "4px 12px",
              borderRadius: 4,
            }}
          >
            NUESTRA HISTORIA
          </Tag>
          <Title
            level={1}
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: 16 }}
          >
            Construyendo un Legado de{" "}
            <span style={{ color: primaryYellow }}>Confianza</span>
          </Title>
          <Paragraph
            style={{
              fontSize: 18,
              color: "#888",
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            Desde hace más de 20 años, Caribe Proyect ha transformado el paisaje
            urbano con estructuras que reflejan calidad y visión de futuro.
          </Paragraph>
        </motion.div>

        <Row gutter={[48, 48]} align="middle" style={{ marginBottom: 100 }}>
          <Col xs={24} md={12}>
            <motion.div variants={itemVariants}>
              <Title level={2}>Nuestra Misión</Title>
              <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
                Proveer soluciones integrales de construcción que superen las
                expectativas de nuestros clientes, garantizando seguridad,
                sostenibilidad y excelencia arquitectónica en cada metro
                cuadrado.
              </Paragraph>
              <div style={{ display: "flex", gap: 24, marginTop: 32 }}>
                <div style={{ textAlign: "center" }}>
                  <Award size={32} color={primaryYellow} />
                  <div style={{ fontWeight: 600, marginTop: 8 }}>
                    Excelencia
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <Users size={32} color={primaryYellow} />
                  <div style={{ fontWeight: 600, marginTop: 8 }}>Equipo</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <Rocket size={32} color={primaryYellow} />
                  <div style={{ fontWeight: 600, marginTop: 8 }}>
                    Innovación
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
          <Col xs={24} md={12}>
            <motion.div variants={itemVariants}>
              <Timeline
                mode="left"
                items={[
                  {
                    label: "2004",
                    children: "Fundación de Caribe Proyect en el Caribe.",
                  },
                  {
                    label: "2010",
                    children:
                      "Primer gran proyecto residencial de 100 unidades.",
                  },
                  {
                    label: "2018",
                    children:
                      "Expansión a proyectos industriales y logísticos.",
                  },
                  {
                    label: "2024",
                    children: "Líder regional en construcción sostenible.",
                  },
                ]}
              />
            </motion.div>
          </Col>
        </Row>

        <motion.div
          variants={itemVariants}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <Title level={2}>El Equipo Detrás del Éxito</Title>
        </motion.div>

        <Row gutter={[32, 32]}>
          {teamMembers.map((member, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <motion.div variants={itemVariants}>
                <Card
                  className="hover-card"
                  cover={
                    <img
                      alt={member.name}
                      src={member.img}
                      style={{ height: 300, objectFit: "cover" }}
                    />
                  }
                  style={{ textAlign: "center", overflow: "hidden" }}
                >
                  <Title level={4} style={{ marginBottom: 4 }}>
                    {member.name}
                  </Title>
                  <Text type="secondary">{member.role}</Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </div>
  );
};

export default About;
