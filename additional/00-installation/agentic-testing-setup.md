---
sidebar_position: 5
---


# Agentic Testing Setup

This guide describes the **core configuration** for running Agentic Test Automation with Menditect Test Automation (MTA) and AI assistants (such as Cursor, Claude Code, GitHub Copilot, Gemini / Antigravity, and Cline).

---


## 1. System Configuration & Documentation References

The standard installation of the MTA Platform, MTA Plugin, Application Instances, and Frontend test modules is documented in detail on the official [Menditect Documentation Portal](https://documentation.menditect.com).

Below is the configuration matrix mapping each system to its documentation and required agentic settings:

### 1. MTA Platform & Authentication
* **General Installation & Configuration:** Refer to [Menditect Installation Guide](https://documentation.menditect.com/additional/installation) and [Reference Guide](https://documentation.menditect.com/).
* **Application Instances Setup:** Create your environment instance in MTA Portal (**Applications** > Select Application > **Application Instances**) and copy the generated **Application Instance Token (UUID)**.
* **MTA Bearer Token for MCP:**
  - Log into the MTA Web Portal.
  - Navigate to **User Profile** (or **Developer Settings**) and generate an **API Bearer Token**.
  - Passed in the `Authorization: Bearer <mta_token>` header when calling `[mta_base_url]/primitivetools/mcp`.

### 2. Mendix Application & MTA Plugin Setup
* **Plugin Installation & Startup Hook:** Import [MTA Plugin (Marketplace Component 214717)](https://marketplace.mendix.com/link/component/214717) and add `MtaPluginModule.ASU_Setup_Connection_MTA` to your **After Startup** microflow. Detailed instructions are available in the [Menditect Reference Guide](https://documentation.menditect.com/).
* **MTA Connection Constants:** Set `MtaPluginModule.ApplicationInstanceToken` and `MtaPluginModule.MTAConnectionUrl` per environment profile.
* **Embedded MCP Server Configuration (`MTA_plugin`):**
  - Set `MtaPluginModule.EnableMcpServer = true` to enable the `/plugin/mcp` endpoint for exploratory testing.
  - Set `MtaPluginModule.McpServerAccessToken` as the Bearer token securing the `/plugin/mcp` endpoint (simple string for localhost; strong 256-bit encrypted constant for cloud/remote environments).
* **Frontend Testing Modules (Playwright & Frontend TestKit):** For UI testing, import the **Playwright Connector** (Component 214764) and **Frontend Test Kit** (Component 206637) as described in the [Menditect Frontend Testing Documentation](https://documentation.menditect.com/).

### 3. Agentic Test Skills Setup
* **Skills Source:** Official skills are maintained in [`Menditect/agentic-test-skills`](https://github.com/Menditect/agentic-test-skills).
* **Workspace Placement:**
  - **Standard Placement:** Cloned or copied into `./skills/` (or `.agent/skills/`) alongside `AGENTS.md`.
  - **Mendix 11.12+ Native Module:** Imported via [Menditect Agentic Test Skills (Component 305457)](https://marketplace.mendix.com/link/component/305457) into `skillssource/_modules/menditect_agentictestskills/`.
* **Immutability Rule:** Never modify official MTA skill files inline; custom organization skills should always be created in separate directories (e.g. `skills/my-custom-skill/`).

---



## 2. Configuring AI Assistant MCP Connections

MCP server configuration is **specific to your chosen AI assistant and IDE environment** (e.g., Cursor, VS Code, Claude Code, Cline, etc.).

To connect your agent to MTA and the MTA Plugin, you can choose between two approaches:

### Option 1: Agent Self-Configuration (Recommended)
You can instruct your AI assistant to configure its own MCP server settings dynamically:
> *"Read `mta_config.json` and `.env` in this workspace, and configure your MCP client settings to connect to the `mta` server (`mcp_endpoint`) and `mta_plugin` server (`plugin_mcp_url`) using their corresponding Bearer tokens."*

### Option 2: Manual MCP Configuration
Configure your assistant's MCP client using the connection details specified in `mta_config.json` and `.env`:

* **MTA Primitive Tools Server (`mta`):**
  - **Endpoint / URL:** Value of `mcp_endpoint` (e.g. `https://mta-trial.mendixcloud.com/primitivetools/mcp`)
  - **Headers:** `Authorization: Bearer <MTA_MCP_AUTH_HEADER>`
* **MTA Runtime Plugin Server (`mta_plugin`):**
  - **Endpoint / URL:** Value of `plugin_mcp_url` (e.g. `http://localhost:8081/plugin/mcp`)
  - **Headers:** `Authorization: <PLUGIN_MCP_TOKEN>` *(if configured)*

---

## 3. Optional Starter Kit: `agentic-test-tools` Template

To accelerate setting up your workspace, Menditect provides an optional GitHub template repository: [`Menditect/agentic-test-tools`](https://github.com/Menditect/agentic-test-tools).

:::caution Community & Experimental Tooling (Use At Your Own Risk)
The `agentic-test-tools` template is provided as an experimental, community helper strictly **"AS IS"** without official SLAs or warranties. It is designed to simplify workspace configuration, but all underlying systems can be configured manually as described in this guide.
:::

### What `agentic-test-tools` Helps Automate:
* **Skills Placement & Updates:** Automatically synchronizes and places official skills from `agentic-test-skills` into the correct location (`./skills/` or Mendix 11.12+ `skillssource/_modules/`).
* **`mta_config.json` Scaffolding:** An interactive setup wizard (`npm run setup` / `.\setup.ps1`) inspects your Mendix `.mpr` project, discovers application instance constants, and automatically generates valid `mta_config.json` and `.env` files.
* **`mxcli` Setup & Catalog Compilation:** Downloads the platform-specific `mxcli` binary from Mendix Labs, deploys `./mxcli` wrapper scripts, and compiles the SQLite model catalog (`.mxcli/catalog.db`).
* **IDE MCP Scaffolding:** Generates ready-to-use MCP configuration files for Cursor (`.cursor/mcp.json`), VS Code (`.vscode/mcp.json`), and Claude Code (`.claude/settings.json`).
* **Restart Resilience Proxy:** Provides an optional stdio-to-HTTP bridge (`scripts/mta-proxy.js`) that buffers requests and automatically re-establishes MCP handshakes if Mendix Studio Pro or the local runtime restarts during testing.

---

## 7. Summary Checklist

- [ ] **MTA Platform:** Logged into portal, generated API Bearer token, and created the Application Instance.
- [ ] **MTA Plugin:** Module imported into Mendix project with `ASU_Setup_Connection_MTA` called in After Startup.
- [ ] **Plugin MCP Enabled:** `MtaPluginModule.EnableMcpServer = true` and `McpServerAccessToken` configured.
- [ ] **Model Inspector:** `mxcli` or Studio Pro MCP accessible for AST queries.
- [ ] **Agentic Skills:** Skills and `AGENTS.md` deployed in `./skills/` or `skillssource/_modules`.
- [ ] **Config SSOT:** `mta_config.json` populated with matching endpoints, application name, and default instance token.
- [ ] **Agent Connected:** AI assistant configured to reach `mcp_endpoint` and `plugin_mcp_url`.
