const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");


// ======================================================
// AZURE KNOWLEDGE BASE
// ======================================================

const knowledgeBase = [

    {
        keywords: ["azure vm", "virtual machine", "vm"],
        answer: `
            <strong>Azure Virtual Machine (VM)</strong><br><br>
            Azure VM is an Infrastructure-as-a-Service (IaaS) offering
            that allows you to run Windows or Linux virtual machines in
            Microsoft Azure.<br><br>

            You can manage the operating system, applications, networking,
            disks and security configuration.
        `
    },

    {
        keywords: ["vnet", "virtual network"],
        answer: `
            <strong>Azure Virtual Network (VNet)</strong><br><br>
            Azure VNet is a private network in Microsoft Azure.
            It allows Azure resources such as VMs, AKS and other services
            to communicate securely.<br><br>

            Important VNet components include:
            <br>• Address Space
            <br>• Subnets
            <br>• Network Security Groups
            <br>• Route Tables
            <br>• VNet Peering
        `
    },

    {
        keywords: ["subnet", "subnets"],
        answer: `
            <strong>Azure Subnet</strong><br><br>
            A subnet is a logical subdivision of an Azure VNet.
            It allows you to organize and isolate resources within a
            virtual network.<br><br>

            Example:
            <br>VNet → Frontend Subnet → Backend Subnet → Database Subnet
        `
    },

    {
        keywords: ["nsg", "network security group"],
        answer: `
            <strong>Network Security Group (NSG)</strong><br><br>
            NSG is used to control inbound and outbound network traffic
            for Azure resources.<br><br>

            NSG rules can be based on:
            <br>• Source
            <br>• Destination
            <br>• Port
            <br>• Protocol
            <br>• Allow / Deny
        `
    },

    {
        keywords: ["aks", "azure kubernetes"],
        answer: `
            <strong>Azure Kubernetes Service (AKS)</strong><br><br>
            AKS is Microsoft's managed Kubernetes service.
            It helps deploy, manage and scale containerized applications
            using Kubernetes.<br><br>

            Common AKS components include:
            <br>• Cluster
            <br>• Node Pools
            <br>• Pods
            <br>• Services
            <br>• Ingress
            <br>• Azure Container Registry
        `
    },

    {
        keywords: ["docker", "container"],
        answer: `
            <strong>Docker</strong><br><br>
            Docker is a containerization platform used to package
            applications together with their dependencies.<br><br>

            Docker containers provide consistency between development,
            testing and production environments.
        `
    },

    {
        keywords: ["terraform", "iac", "infrastructure as code"],
        answer: `
            <strong>Terraform</strong><br><br>
            Terraform is an Infrastructure as Code (IaC) tool used to
            provision and manage cloud infrastructure using configuration
            files.<br><br>

            With Azure, Terraform can create resources such as:
            <br>• Resource Groups
            <br>• VNets
            <br>• Subnets
            <br>• VMs
            <br>• Storage Accounts
            <br>• AKS
        `
    },

    {
        keywords: ["acr", "azure container registry"],
        answer: `
            <strong>Azure Container Registry (ACR)</strong><br><br>
            ACR is a private container registry service in Azure.
            It is commonly used to store and manage Docker container
            images.<br><br>

            A common workflow is:
            <br>Developer → Docker Build → ACR → AKS
        `
    },

    {
        keywords: ["storage", "storage account", "blob"],
        answer: `
            <strong>Azure Storage</strong><br><br>
            Azure Storage provides highly scalable cloud storage services.
            <br><br>

            Main services include:
            <br>• Blob Storage
            <br>• Azure Files
            <br>• Queue Storage
            <br>• Table Storage
        `
    },

    {
        keywords: ["entra", "azure ad", "active directory"],
        answer: `
            <strong>Microsoft Entra ID</strong><br><br>
            Microsoft Entra ID is Microsoft's cloud-based identity and
            access management service.<br><br>

            It provides authentication, authorization, identity management
            and access control for users and applications.
        `
    },

    {
        keywords: ["rbac", "role based access"],
        answer: `
            <strong>Azure RBAC</strong><br><br>
            Role-Based Access Control allows you to control who can access
            Azure resources and what actions they can perform.<br><br>

            Common roles include:
            <br>• Owner
            <br>• Contributor
            <br>• Reader
        `
    },

    {
        keywords: ["key vault", "keyvault"],
        answer: `
            <strong>Azure Key Vault</strong><br><br>
            Azure Key Vault is used to securely store and manage secrets,
            keys and certificates.<br><br>

            It helps applications avoid storing sensitive information
            directly inside source code.
        `
    },

    {
        keywords: ["load balancer", "azure load balancer"],
        answer: `
            <strong>Azure Load Balancer</strong><br><br>
            Azure Load Balancer distributes incoming network traffic
            across multiple backend resources.<br><br>

            It operates at Layer 4 and supports TCP and UDP traffic.
        `
    },

    {
        keywords: ["application gateway", "app gateway"],
        answer: `
            <strong>Azure Application Gateway</strong><br><br>
            Application Gateway is a Layer 7 web traffic load balancer.
            <br><br>

            Features include:
            <br>• URL-based routing
            <br>• SSL termination
            <br>• Host-based routing
            <br>• Web Application Firewall integration
        `
    },

    {
        keywords: ["azure monitor", "monitoring", "log analytics"],
        answer: `
            <strong>Azure Monitor</strong><br><br>
            Azure Monitor provides monitoring and observability for
            Azure resources and applications.<br><br>

            It can collect metrics, logs and telemetry and can be used
            to create alerts and dashboards.
        `
    },

    {
        keywords: ["app service", "azure app service"],
        answer: `
            <strong>Azure App Service</strong><br><br>
            Azure App Service is a managed platform for hosting web
            applications, APIs and backend services without managing
            the underlying servers.
        `
    },

    {
        keywords: ["azure devops", "devops"],
        answer: `
            <strong>Azure DevOps</strong><br><br>
            Azure DevOps provides tools for software development and
            delivery.<br><br>

            Major services include:
            <br>• Azure Repos
            <br>• Azure Pipelines
            <br>• Azure Boards
            <br>• Azure Test Plans
            <br>• Azure Artifacts
        `
    },

    {
        keywords: ["ci cd", "cicd", "pipeline"],
        answer: `
            <strong>CI/CD</strong><br><br>
            Continuous Integration and Continuous Delivery/Deployment
            automate application build, testing and deployment.<br><br>

            A typical pipeline can be:
            <br>Git → Build → Test → Docker Build → Push to ACR → Deploy to AKS
        `
    },

    {
        keywords: ["github actions", "github action"],
        answer: `
            <strong>GitHub Actions</strong><br><br>
            GitHub Actions is a CI/CD automation platform integrated
            with GitHub repositories.<br><br>

            It can automate:
            <br>• Build
            <br>• Testing
            <br>• Docker image creation
            <br>• Terraform deployment
            <br>• Azure deployments
        `
    },

    {
        keywords: ["arm template", "arm templates"],
        answer: `
            <strong>Azure ARM Templates</strong><br><br>
            Azure Resource Manager templates are JSON-based Infrastructure
            as Code templates used to deploy Azure resources consistently.
        `
    },

    {
        keywords: ["bicep"],
        answer: `
            <strong>Azure Bicep</strong><br><br>
            Bicep is a declarative language designed for deploying
            Azure resources using Infrastructure as Code.<br><br>

            It provides a cleaner syntax compared with traditional
            ARM JSON templates.
        `
    },

    {
        keywords: ["azure cli", "az cli"],
        answer: `
            <strong>Azure CLI</strong><br><br>
            Azure CLI is a command-line tool used to create, manage
            and automate Azure resources.<br><br>

            Example:
            <br><code>az group list</code>
            <br><code>az vm list</code>
        `
    },

    {
        keywords: ["kubernetes", "k8s"],
        answer: `
            <strong>Kubernetes</strong><br><br>
            Kubernetes is an open-source container orchestration platform.
            It automates deployment, scaling and management of containerized
            applications.<br><br>

            AKS is Microsoft's managed Kubernetes service.
        `
    }

];


// ======================================================
// SEND MESSAGE
// ======================================================

function sendMessage() {

    const question = userInput.value.trim();

    if (!question) {
        return;
    }

    addUserMessage(question);

    userInput.value = "";

    showTyping();

    setTimeout(() => {

        removeTyping();

        const answer = findAnswer(question);

        addBotMessage(answer);

    }, 600);
}


// ======================================================
// FIND ANSWER
// ======================================================

function findAnswer(question) {

    const normalizedQuestion = question.toLowerCase();

    for (const item of knowledgeBase) {

        for (const keyword of item.keywords) {

            if (normalizedQuestion.includes(keyword)) {

                return item.answer;

            }

        }

    }

    return `
        <strong>I'm currently focused on Azure and Cloud topics.</strong>
        <br><br>

        I can help with:
        <br>• Azure VM
        <br>• VNet & Subnets
        <br>• NSG
        <br>• AKS
        <br>• Docker
        <br>• Terraform
        <br>• ACR
        <br>• Azure Storage
        <br>• Entra ID
        <br>• RBAC
        <br>• Key Vault
        <br>• Azure DevOps
        <br>• CI/CD
        <br>• GitHub Actions
        <br>• Kubernetes
        <br><br>

        Try asking an Azure-related question.
    `;
}


// ======================================================
// QUICK QUESTION
// ======================================================

function askQuestion(question) {

    userInput.value = question;

    sendMessage();

}


// ======================================================
// ADD USER MESSAGE
// ======================================================

function addUserMessage(message) {

    const messageDiv = document.createElement("div");

    messageDiv.className = "message user-message";

    messageDiv.innerHTML = `
        <div class="message-content">
            ${escapeHtml(message)}
        </div>
    `;

    chatMessages.appendChild(messageDiv);

    scrollToBottom();

}


// ======================================================
// ADD BOT MESSAGE
// ======================================================

function addBotMessage(message) {

    const messageDiv = document.createElement("div");

    messageDiv.className = "message bot-message";

    messageDiv.innerHTML = `
        <div class="message-avatar">🤖</div>

        <div class="message-content">
            ${message}
        </div>
    `;

    chatMessages.appendChild(messageDiv);

    scrollToBottom();

}


// ======================================================
// TYPING INDICATOR
// ======================================================

function showTyping() {

    const typingDiv = document.createElement("div");

    typingDiv.id = "typingIndicator";

    typingDiv.className = "message bot-message";

    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>

        <div class="message-content">
            Thinking...
        </div>
    `;

    chatMessages.appendChild(typingDiv);

    scrollToBottom();

}


function removeTyping() {

    const typing = document.getElementById("typingIndicator");

    if (typing) {

        typing.remove();

    }

}


// ======================================================
// ENTER KEY
// ======================================================

userInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});


// ======================================================
// SCROLL
// ======================================================

function scrollToBottom() {

    chatMessages.scrollTop = chatMessages.scrollHeight;

}


// ======================================================
// BASIC HTML ESCAPING
// ======================================================

function escapeHtml(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}