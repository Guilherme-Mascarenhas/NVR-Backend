# NVR-Backend

Este módulo é responsável por gerenciar a transmissão das câmeras IP utilizando o protocolo de rede RTSP. Ele atua como o intermediário entre as câmeras IP e o Front-end, fornecendo os dados necessários para exibição na interface do usuário.

Tecnologias Utilizadas:
Node.js: Plataforma de desenvolvimento do servidor.
node-rtsp-stream: Biblioteca utilizada para a transmissão do RTSP das câmeras IP.
WebSocket: Utilizado para comunicação assíncrona com o Front-end.

Principais Funcionalidades:
Estabelece conexão com as câmeras IP utilizando o protocolo RTSP.
Gerencia o streaming contínuo das imagens das câmeras.
Fornece os dados necessários para o Front-end por meio de uma conexão WebSocket.
