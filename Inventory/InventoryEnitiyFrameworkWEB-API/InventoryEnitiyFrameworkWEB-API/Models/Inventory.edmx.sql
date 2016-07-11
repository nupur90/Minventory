
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 12/12/2015 14:44:17
-- Generated from EDMX file: C:\Users\Mservices2\Desktop\Workspace\Inventory\InventoryEnitiyFrameworkWEB-API\InventoryEnitiyFrameworkWEB-API\Models\Inventory.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [Inventory];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_BankBankAccount_Bank]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[BankBankAccount] DROP CONSTRAINT [FK_BankBankAccount_Bank];
GO
IF OBJECT_ID(N'[dbo].[FK_BankBankAccount_BankAccount]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[BankBankAccount] DROP CONSTRAINT [FK_BankBankAccount_BankAccount];
GO
IF OBJECT_ID(N'[dbo].[FK_Companies_City]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [FK_Companies_City];
GO
IF OBJECT_ID(N'[dbo].[FK_Companies_Country]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [FK_Companies_Country];
GO
IF OBJECT_ID(N'[dbo].[FK_Companies_State]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [FK_Companies_State];
GO
IF OBJECT_ID(N'[dbo].[FK_Country_State]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[State] DROP CONSTRAINT [FK_Country_State];
GO
IF OBJECT_ID(N'[dbo].[FK_CustomerPayments_Customer]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[CustomerPayments] DROP CONSTRAINT [FK_CustomerPayments_Customer];
GO
IF OBJECT_ID(N'[dbo].[FK_Customers_City]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Customers] DROP CONSTRAINT [FK_Customers_City];
GO
IF OBJECT_ID(N'[dbo].[FK_ForgetPasswordRoleOfUsers_ForgetPassword]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ForgetPasswordRoleOfUsers] DROP CONSTRAINT [FK_ForgetPasswordRoleOfUsers_ForgetPassword];
GO
IF OBJECT_ID(N'[dbo].[FK_ForgetPasswordRoleOfUsers_RoleOfUsers]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ForgetPasswordRoleOfUsers] DROP CONSTRAINT [FK_ForgetPasswordRoleOfUsers_RoleOfUsers];
GO
IF OBJECT_ID(N'[dbo].[FK_Items_Category]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Items] DROP CONSTRAINT [FK_Items_Category];
GO
IF OBJECT_ID(N'[dbo].[FK_NewStocks_City]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NewStocks] DROP CONSTRAINT [FK_NewStocks_City];
GO
IF OBJECT_ID(N'[dbo].[FK_NewUnits_FromUnits]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NewUnits] DROP CONSTRAINT [FK_NewUnits_FromUnits];
GO
IF OBJECT_ID(N'[dbo].[FK_NewUnits_ToUnits]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[NewUnits] DROP CONSTRAINT [FK_NewUnits_ToUnits];
GO
IF OBJECT_ID(N'[dbo].[FK_PartyPaymnets_City]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PartyPaymnets] DROP CONSTRAINT [FK_PartyPaymnets_City];
GO
IF OBJECT_ID(N'[dbo].[FK_PaymentSupplier_Payment]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PaymentSupplier] DROP CONSTRAINT [FK_PaymentSupplier_Payment];
GO
IF OBJECT_ID(N'[dbo].[FK_PurchaseInvoices_City]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PurchaseInvoices] DROP CONSTRAINT [FK_PurchaseInvoices_City];
GO
IF OBJECT_ID(N'[dbo].[FK_PurchaseInvoices_Supplier]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PurchaseInvoices] DROP CONSTRAINT [FK_PurchaseInvoices_Supplier];
GO
IF OBJECT_ID(N'[dbo].[FK_QuantityAndPrice_Unit]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[QuantityAndPrice] DROP CONSTRAINT [FK_QuantityAndPrice_Unit];
GO
IF OBJECT_ID(N'[dbo].[FK_SalesInvoices_City]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[SalesInvoices] DROP CONSTRAINT [FK_SalesInvoices_City];
GO
IF OBJECT_ID(N'[dbo].[FK_SalesInvoices_Customer]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[SalesInvoices] DROP CONSTRAINT [FK_SalesInvoices_Customer];
GO
IF OBJECT_ID(N'[dbo].[FK_Services_Category]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Services] DROP CONSTRAINT [FK_Services_Category];
GO
IF OBJECT_ID(N'[dbo].[FK_State_City]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[City] DROP CONSTRAINT [FK_State_City];
GO
IF OBJECT_ID(N'[dbo].[FK_SubMenuMenu]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[SubMenus] DROP CONSTRAINT [FK_SubMenuMenu];
GO
IF OBJECT_ID(N'[dbo].[FK_SupplierSupplyerPayment]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[SupplierPayments] DROP CONSTRAINT [FK_SupplierSupplyerPayment];
GO
IF OBJECT_ID(N'[dbo].[FK_Users_Roles]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Users] DROP CONSTRAINT [FK_Users_Roles];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[BankAccounts]', 'U') IS NOT NULL
    DROP TABLE [dbo].[BankAccounts];
GO
IF OBJECT_ID(N'[dbo].[BankBankAccount]', 'U') IS NOT NULL
    DROP TABLE [dbo].[BankBankAccount];
GO
IF OBJECT_ID(N'[dbo].[Banks]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Banks];
GO
IF OBJECT_ID(N'[dbo].[BusinessDetails]', 'U') IS NOT NULL
    DROP TABLE [dbo].[BusinessDetails];
GO
IF OBJECT_ID(N'[dbo].[Categories]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Categories];
GO
IF OBJECT_ID(N'[dbo].[City]', 'U') IS NOT NULL
    DROP TABLE [dbo].[City];
GO
IF OBJECT_ID(N'[dbo].[Companies]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Companies];
GO
IF OBJECT_ID(N'[dbo].[ContraEntries]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ContraEntries];
GO
IF OBJECT_ID(N'[dbo].[Country]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Country];
GO
IF OBJECT_ID(N'[dbo].[CustomerPayments]', 'U') IS NOT NULL
    DROP TABLE [dbo].[CustomerPayments];
GO
IF OBJECT_ID(N'[dbo].[Customers]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Customers];
GO
IF OBJECT_ID(N'[dbo].[Expenses]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Expenses];
GO
IF OBJECT_ID(N'[dbo].[ForgetPasswordRoleOfUsers]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ForgetPasswordRoleOfUsers];
GO
IF OBJECT_ID(N'[dbo].[ForgetPasswords]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ForgetPasswords];
GO
IF OBJECT_ID(N'[dbo].[Items]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Items];
GO
IF OBJECT_ID(N'[dbo].[Languages]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Languages];
GO
IF OBJECT_ID(N'[dbo].[LogIns]', 'U') IS NOT NULL
    DROP TABLE [dbo].[LogIns];
GO
IF OBJECT_ID(N'[dbo].[Menus]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Menus];
GO
IF OBJECT_ID(N'[dbo].[NewStockItem]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NewStockItem];
GO
IF OBJECT_ID(N'[dbo].[NewStocks]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NewStocks];
GO
IF OBJECT_ID(N'[dbo].[NewUnits]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NewUnits];
GO
IF OBJECT_ID(N'[dbo].[Notifications]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Notifications];
GO
IF OBJECT_ID(N'[dbo].[Organisation]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Organisation];
GO
IF OBJECT_ID(N'[dbo].[PartyPaymnets]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PartyPaymnets];
GO
IF OBJECT_ID(N'[dbo].[Payments]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Payments];
GO
IF OBJECT_ID(N'[dbo].[PaymentSupplier]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PaymentSupplier];
GO
IF OBJECT_ID(N'[dbo].[Percentage]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Percentage];
GO
IF OBJECT_ID(N'[dbo].[PurchaseInvoices]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PurchaseInvoices];
GO
IF OBJECT_ID(N'[dbo].[QuantityAndPrice]', 'U') IS NOT NULL
    DROP TABLE [dbo].[QuantityAndPrice];
GO
IF OBJECT_ID(N'[dbo].[RoleOfUsers]', 'U') IS NOT NULL
    DROP TABLE [dbo].[RoleOfUsers];
GO
IF OBJECT_ID(N'[dbo].[SalesInvoices]', 'U') IS NOT NULL
    DROP TABLE [dbo].[SalesInvoices];
GO
IF OBJECT_ID(N'[dbo].[Services]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Services];
GO
IF OBJECT_ID(N'[dbo].[State]', 'U') IS NOT NULL
    DROP TABLE [dbo].[State];
GO
IF OBJECT_ID(N'[dbo].[StockInHands]', 'U') IS NOT NULL
    DROP TABLE [dbo].[StockInHands];
GO
IF OBJECT_ID(N'[dbo].[SubMenus]', 'U') IS NOT NULL
    DROP TABLE [dbo].[SubMenus];
GO
IF OBJECT_ID(N'[dbo].[SupplierPayments]', 'U') IS NOT NULL
    DROP TABLE [dbo].[SupplierPayments];
GO
IF OBJECT_ID(N'[dbo].[Suppliers]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Suppliers];
GO
IF OBJECT_ID(N'[dbo].[Taxes]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Taxes];
GO
IF OBJECT_ID(N'[dbo].[Unit]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Unit];
GO
IF OBJECT_ID(N'[dbo].[Users]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Users];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[Country-State-City-View]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[Country-State-City-View];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[Customer_View]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[Customer_View];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[ServicesView]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[ServicesView];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[Supplier_View]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[Supplier_View];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[View_Categories]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[View_Categories];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[View_Companies]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[View_Companies];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[View_Country]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[View_Country];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[View_Customer_Payment_SalesInvoice]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[View_Customer_Payment_SalesInvoice];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[View_Item]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[View_Item];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[View_New_Units]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[View_New_Units];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[View_Role]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[View_Role];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[View_Supplier_PurcchaseIvoice_SupplierPayment]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[View_Supplier_PurcchaseIvoice_SupplierPayment];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[View_Unit]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[View_Unit];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[View_Users]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[View_Users];
GO
IF OBJECT_ID(N'[InventoryModelStoreContainer].[View_Users_Role]', 'U') IS NOT NULL
    DROP TABLE [InventoryModelStoreContainer].[View_Users_Role];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'BankAccounts'
CREATE TABLE [dbo].[BankAccounts] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [AccountNumber] nvarchar(max)  NULL,
    [AccountName] nvarchar(50)  NULL,
    [Bank] nvarchar(150)  NULL,
    [Organisation_ID] int  NULL,
    [Status] bit  NULL,
    [Bank1_Id] int  NULL
);
GO

-- Creating table 'Banks'
CREATE TABLE [dbo].[Banks] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [BankName] nvarchar(50)  NULL,
    [IFSCCode] nvarchar(max)  NULL,
    [Branch] nvarchar(50)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'BusinessDetails'
CREATE TABLE [dbo].[BusinessDetails] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Services] nvarchar(50)  NULL,
    [FinancialYearFrom] datetime  NULL,
    [BookBeginingFrom] datetime  NULL,
    [CurrencySymbol] nvarchar(50)  NULL,
    [CurrencyChar] nvarchar(50)  NULL,
    [AgreeTermsAndCondition] bit  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Categories'
CREATE TABLE [dbo].[Categories] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(150)  NULL,
    [Description] nvarchar(250)  NULL,
    [ParentCotegory_ID] int  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Cities'
CREATE TABLE [dbo].[Cities] (
    [ID] int IDENTITY(1,1) NOT NULL,
    [City1] nvarchar(50)  NULL,
    [State_ID] int  NOT NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Companies'
CREATE TABLE [dbo].[Companies] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [City_ID] int  NULL,
    [Name] nvarchar(50)  NULL,
    [ContactNumber] nvarchar(20)  NULL,
    [EmailID] nvarchar(50)  NULL,
    [TelephoneNumber] nvarchar(20)  NULL,
    [Address] nvarchar(250)  NULL,
    [State_ID] int  NULL,
    [PinCode] nvarchar(10)  NULL,
    [Country_ID] int  NULL,
    [Website] nvarchar(50)  NULL,
    [VATNumber] nvarchar(50)  NULL,
    [LBTNumber] nvarchar(50)  NULL,
    [PANNumber] nvarchar(50)  NULL,
    [LicenseNumber] nvarchar(50)  NULL,
    [TINNo] nvarchar(50)  NULL,
    [STNo] nvarchar(50)  NULL,
    [TANNumber] nvarchar(50)  NULL,
    [CINNumber] nvarchar(50)  NULL,
    [Other] nvarchar(50)  NULL,
    [Service] nvarchar(250)  NULL,
    [FinancialYearFrom] datetime  NULL,
    [BookingBeginigFrom] datetime  NULL,
    [CurrencyChar] nvarchar(50)  NULL,
    [CurrencySymbol] nvarchar(50)  NULL,
    [AgreeTermsAndCondition] bit  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'ContraEntries'
CREATE TABLE [dbo].[ContraEntries] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [PaymentDate] datetime  NULL,
    [From] datetime  NULL,
    [To] datetime  NULL,
    [CashAccount] int  NULL,
    [BankAccount] int  NULL,
    [Amount] int  NULL,
    [Note] nvarchar(250)  NULL
);
GO

-- Creating table 'Countries'
CREATE TABLE [dbo].[Countries] (
    [ID] int IDENTITY(1,1) NOT NULL,
    [CountryName] nvarchar(50)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Customers'
CREATE TABLE [dbo].[Customers] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(50)  NULL,
    [City_ID] int  NULL,
    [ContactNumber] nvarchar(20)  NULL,
    [ContactNumber2] nvarchar(20)  NULL,
    [EmailID] nvarchar(50)  NULL,
    [EmailID2] nvarchar(50)  NULL,
    [VATNumber] nvarchar(50)  NULL,
    [TINNumber] nvarchar(50)  NULL,
    [Street] nvarchar(50)  NULL,
    [Area] nvarchar(50)  NULL,
    [Pincode] nvarchar(50)  NULL,
    [Note] nvarchar(50)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Expenses'
CREATE TABLE [dbo].[Expenses] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Discription] nvarchar(150)  NULL,
    [Amount] int  NULL,
    [Date] datetime  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'ForgetPasswords'
CREATE TABLE [dbo].[ForgetPasswords] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [User_ID] int  NULL,
    [OldPassword] nvarchar(50)  NULL,
    [NewPassword] nvarchar(50)  NULL,
    [ConfirmPassword] nvarchar(50)  NULL,
    [UpdatedDate] datetime  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Languages'
CREATE TABLE [dbo].[Languages] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [NameOfLanuguages] nvarchar(50)  NULL
);
GO

-- Creating table 'LogIns'
CREATE TABLE [dbo].[LogIns] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [userName] nvarchar(50)  NULL,
    [Password] nvarchar(50)  NULL,
    [ConfirmPassword] nvarchar(50)  NULL,
    [CreatedDate] datetime  NULL,
    [UpdatesDate] datetime  NULL,
    [DeletedDate] datetime  NULL,
    [Deleted] bit  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Menus'
CREATE TABLE [dbo].[Menus] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [NameOfMenu] nvarchar(50)  NULL,
    [CreatedDate] datetime  NULL,
    [UpdatedDate] datetime  NULL,
    [DeletedDate] datetime  NULL,
    [Deleted] datetime  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'NewStockItems'
CREATE TABLE [dbo].[NewStockItems] (
    [NewStocks_Id] int  NOT NULL,
    [NewStocks_SupplierName] int  NOT NULL,
    [NewStocks_Date] int  NOT NULL,
    [NewStocks_City] int  NOT NULL,
    [NewStocks_Note] int  NOT NULL,
    [NewStocks_TotalQuantity] int  NOT NULL,
    [Items_Id] int  NOT NULL
);
GO

-- Creating table 'NewStocks'
CREATE TABLE [dbo].[NewStocks] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [SupplierName] nvarchar(250)  NULL,
    [Date] datetime  NULL,
    [City_ID] int  NULL,
    [Note] nvarchar(250)  NULL,
    [TotalQuantity] int  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Notifications'
CREATE TABLE [dbo].[Notifications] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [ReorderItems] int  NULL,
    [OverdueCustomers] int  NULL,
    [OuverdueSuppliers] int  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Organisations'
CREATE TABLE [dbo].[Organisations] (
    [ID] int IDENTITY(1,1) NOT NULL,
    [OrganisationName] nvarchar(100)  NULL,
    [CreatedDate] datetime  NULL,
    [UpdatedDate] datetime  NULL,
    [DeletedDate] datetime  NULL,
    [Deleted] bit  NULL
);
GO

-- Creating table 'PartyPaymnets'
CREATE TABLE [dbo].[PartyPaymnets] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [PartyName] nvarchar(50)  NULL,
    [City_ID] int  NULL,
    [ContactNumber] nvarchar(20)  NULL,
    [Amount] int  NULL,
    [PaymentType] nvarchar(50)  NULL,
    [PaymentDate] datetime  NULL,
    [Note] nvarchar(250)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'PaymentSuppliers'
CREATE TABLE [dbo].[PaymentSuppliers] (
    [Payments_Id] int  NOT NULL,
    [Suppliers_Id] int  NOT NULL
);
GO

-- Creating table 'QuantityAndPrices'
CREATE TABLE [dbo].[QuantityAndPrices] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Item_Id] int  NULL,
    [CostPrice] int  NULL,
    [SalsePrice] int  NULL,
    [ProfitPercentage] int  NULL,
    [BatchNumber] int  NULL,
    [ManuFacturingDate] datetime  NULL,
    [ExpiryDate] datetime  NULL,
    [Unit_Id] int  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'RoleOfUsers'
CREATE TABLE [dbo].[RoleOfUsers] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [NameOfUserRole] nvarchar(50)  NULL,
    [CreatedDate] datetime  NULL,
    [UpdatedDate] datetime  NULL,
    [DeletedDate] datetime  NULL,
    [Delete] bit  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Services'
CREATE TABLE [dbo].[Services] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [ServiceName] nvarchar(50)  NULL,
    [SalesPrice] int  NULL,
    [PurchasePrice] int  NULL,
    [Unit] int  NULL,
    [Category_ID] int  NULL,
    [PurchaseTax_ID] int  NULL,
    [SalesTax_ID] int  NULL,
    [AllowSales] bit  NULL,
    [AllowPurchase] bit  NULL,
    [Description] nvarchar(50)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'States'
CREATE TABLE [dbo].[States] (
    [ID] int IDENTITY(1,1) NOT NULL,
    [StateName] nvarchar(50)  NULL,
    [Country_ID] int  NOT NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'StockInHands'
CREATE TABLE [dbo].[StockInHands] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [ItemName] nvarchar(250)  NULL,
    [Unit] int  NULL,
    [SalesPrice] int  NULL,
    [CurrentStock] int  NULL
);
GO

-- Creating table 'SubMenus'
CREATE TABLE [dbo].[SubMenus] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [SubMenuName] nvarchar(50)  NOT NULL,
    [CreatedDate] datetime  NOT NULL,
    [UpdatedDate] datetime  NOT NULL,
    [DeletedDate] datetime  NOT NULL,
    [Deleted] bigint  NOT NULL,
    [Menu_Id] int  NOT NULL
);
GO

-- Creating table 'Suppliers'
CREATE TABLE [dbo].[Suppliers] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(50)  NULL,
    [City_ID] int  NULL,
    [ContactNumber] nvarchar(50)  NULL,
    [ContactNumber2] nvarchar(50)  NULL,
    [EmailID] nvarchar(50)  NULL,
    [EmailID2] nvarchar(50)  NULL,
    [VATNumber] nvarchar(50)  NULL,
    [TINNumber] nvarchar(50)  NULL,
    [Street] nvarchar(50)  NULL,
    [Area] nvarchar(50)  NULL,
    [Pincode] nvarchar(10)  NULL,
    [Note] nvarchar(150)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Taxes'
CREATE TABLE [dbo].[Taxes] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(50)  NULL,
    [TaxValue] int  NULL,
    [Description] nvarchar(250)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [UserName] nvarchar(50)  NULL,
    [FirstName] nvarchar(50)  NULL,
    [LastName] nvarchar(50)  NULL,
    [Role_ID] int  NULL,
    [Company_ID] int  NULL,
    [ContactNumber] nvarchar(20)  NULL,
    [EmailID] nvarchar(50)  NULL,
    [BirthDay] datetime  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Country_State_City_View'
CREATE TABLE [dbo].[Country_State_City_View] (
    [Country_ID] int  NOT NULL,
    [CountryName] nvarchar(50)  NULL,
    [State_ID] int  NOT NULL,
    [StateName] nvarchar(50)  NULL,
    [City_ID] int  NOT NULL,
    [City] nvarchar(50)  NULL
);
GO

-- Creating table 'Customer_View'
CREATE TABLE [dbo].[Customer_View] (
    [Id] int  NOT NULL,
    [Name] nvarchar(50)  NULL,
    [City_ID] int  NULL,
    [City] nvarchar(50)  NULL,
    [ContactNumber] nvarchar(20)  NULL,
    [ContactNumber2] nvarchar(20)  NULL,
    [EmailID] nvarchar(50)  NULL,
    [EmailID2] nvarchar(50)  NULL,
    [VATNumber] nvarchar(50)  NULL,
    [TINNumber] nvarchar(50)  NULL,
    [Street] nvarchar(50)  NULL,
    [Area] nvarchar(50)  NULL,
    [Pincode] nvarchar(50)  NULL,
    [Note] nvarchar(50)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'ServicesViews'
CREATE TABLE [dbo].[ServicesViews] (
    [Id] int  NOT NULL,
    [ServiceName] nvarchar(50)  NULL,
    [Name] nvarchar(150)  NULL,
    [SalesPrice] int  NULL,
    [PurchasePrice] int  NULL,
    [Unit] int  NULL,
    [Category_ID] int  NULL,
    [PurchaseTax_ID] int  NULL,
    [SalesTax_ID] int  NULL,
    [AllowSales] bit  NULL,
    [AllowPurchase] bit  NULL,
    [Description] nvarchar(50)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Supplier_View'
CREATE TABLE [dbo].[Supplier_View] (
    [Id] int  NOT NULL,
    [Name] nvarchar(50)  NULL,
    [City_ID] int  NULL,
    [City] nvarchar(50)  NULL,
    [ContactNumber] nvarchar(50)  NULL,
    [ContactNumber2] nvarchar(50)  NULL,
    [EmailID] nvarchar(50)  NULL,
    [EmailID2] nvarchar(50)  NULL,
    [VATNumber] nvarchar(50)  NULL,
    [TINNumber] nvarchar(50)  NULL,
    [Street] nvarchar(50)  NULL,
    [Area] nvarchar(50)  NULL,
    [Pincode] nvarchar(10)  NULL,
    [Note] nvarchar(150)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'View_Categories'
CREATE TABLE [dbo].[View_Categories] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(150)  NULL,
    [Description] nvarchar(250)  NULL,
    [Status] bit  NULL,
    [ParentCotegory_ID] int  NULL
);
GO

-- Creating table 'View_Companies'
CREATE TABLE [dbo].[View_Companies] (
    [Id] int  NOT NULL,
    [City_ID] int  NULL,
    [City] nvarchar(50)  NULL,
    [Name] nvarchar(50)  NULL,
    [ContactNumber] nvarchar(20)  NULL,
    [EmailID] nvarchar(50)  NULL,
    [TelephoneNumber] nvarchar(20)  NULL,
    [Address] nvarchar(250)  NULL,
    [State_ID] int  NULL,
    [StateName] nvarchar(50)  NULL,
    [PinCode] nvarchar(10)  NULL,
    [Country_ID] int  NULL,
    [CountryName] nvarchar(50)  NULL,
    [Website] nvarchar(50)  NULL,
    [VATNumber] nvarchar(50)  NULL,
    [LBTNumber] nvarchar(50)  NULL,
    [PANNumber] nvarchar(50)  NULL,
    [LicenseNumber] nvarchar(50)  NULL,
    [TINNo] nvarchar(50)  NULL,
    [STNo] nvarchar(50)  NULL,
    [TANNumber] nvarchar(50)  NULL,
    [CINNumber] nvarchar(50)  NULL,
    [Other] nvarchar(50)  NULL,
    [Service] nvarchar(250)  NULL,
    [FinancialYearFrom] datetime  NULL,
    [BookingBeginigFrom] datetime  NULL,
    [CurrencySymbol] nvarchar(50)  NULL,
    [CurrencyChar] nvarchar(50)  NULL,
    [AgreeTermsAndCondition] bit  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'View_Role'
CREATE TABLE [dbo].[View_Role] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [NameOfUserRole] nvarchar(50)  NULL,
    [CreatedDate] datetime  NULL,
    [UpdatedDate] datetime  NULL,
    [DeletedDate] datetime  NULL,
    [Delete] bit  NULL
);
GO

-- Creating table 'View_Users_Role'
CREATE TABLE [dbo].[View_Users_Role] (
    [Id] int  NOT NULL,
    [UserName] nvarchar(50)  NULL,
    [FirstName] nvarchar(50)  NULL,
    [LastName] nvarchar(50)  NULL,
    [Role_ID] int  NULL,
    [NameOfUserRole] nvarchar(50)  NULL,
    [Company_ID] int  NULL,
    [ContactNumber] nvarchar(20)  NULL,
    [EmailID] nvarchar(50)  NULL,
    [BirthDay] datetime  NULL
);
GO

-- Creating table 'Units'
CREATE TABLE [dbo].[Units] (
    [ID] int IDENTITY(1,1) NOT NULL,
    [Name] int  NULL,
    [Description] nvarchar(250)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Percentages'
CREATE TABLE [dbo].[Percentages] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [ProfitPercentage] int  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'NewUnits'
CREATE TABLE [dbo].[NewUnits] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [FromQuantity] nvarchar(50)  NULL,
    [FromUnit] int  NULL,
    [ToQuantity] nvarchar(50)  NULL,
    [ToUnit] int  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Items'
CREATE TABLE [dbo].[Items] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [ItemName] nvarchar(50)  NULL,
    [Code] int  NULL,
    [Manufacturer] nvarchar(250)  NULL,
    [SalePrice] float  NULL,
    [CostPrice] float  NULL,
    [PurchasePrice] float  NULL,
    [MRP] float  NULL,
    [StandardUnit_ID] int  NULL,
    [PurchaseUnit_ID] int  NULL,
    [Category_ID] int  NULL,
    [PurchaseTax] int  NULL,
    [SalesTax] int  NULL,
    [OpeningStock] int  NULL,
    [IdealQuantity] int  NULL,
    [ReorderQuantity] int  NULL,
    [MaxQuantity] int  NULL,
    [TotalQuantity] int  NULL,
    [AllowSales] bit  NULL,
    [AllowPurchase] bit  NULL,
    [AllowInword] bit  NULL,
    [AllowOutword] bit  NULL,
    [Description] nvarchar(150)  NULL,
    [ManufacturingDate] datetime  NULL,
    [ExpiryDate] datetime  NULL,
    [ProfitPercentage] int  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'View_Item'
CREATE TABLE [dbo].[View_Item] (
    [Id] int  NOT NULL,
    [ItemName] nvarchar(50)  NULL,
    [Code] int  NULL,
    [Manufacturer] nvarchar(250)  NULL,
    [SalePrice] float  NULL,
    [CostPrice] float  NULL,
    [PurchasePrice] float  NULL,
    [MRP] float  NULL,
    [StandardUnit_ID] int  NULL,
    [StandardUniName] int  NULL,
    [PurchaseUnit_ID] int  NULL,
    [PurchaseUnitName] int  NULL,
    [Category_ID] int  NULL,
    [CategoryName] nvarchar(150)  NULL,
    [PurchaseTax] int  NULL,
    [PurchaseTaxName] nvarchar(50)  NULL,
    [SalesTax] int  NULL,
    [SalesTaxName] nvarchar(50)  NULL,
    [OpeningStock] int  NULL,
    [IdealQuantity] int  NULL,
    [ReorderQuantity] int  NULL,
    [MaxQuantity] int  NULL,
    [TotalQuantity] int  NULL,
    [AllowSales] bit  NULL,
    [AllowPurchase] bit  NULL,
    [AllowInword] bit  NULL,
    [AllowOutword] bit  NULL,
    [Description] nvarchar(150)  NULL,
    [ManufacturingDate] datetime  NULL,
    [ExpiryDate] datetime  NULL,
    [ProfitPercentage] int  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'Payments'
CREATE TABLE [dbo].[Payments] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [PaymentType] nvarchar(50)  NULL,
    [ChequeNumber] nvarchar(50)  NULL,
    [PaymentDate] datetime  NULL,
    [TotalAmount] float  NULL,
    [PaidAmount] float  NULL,
    [BalanceAmount] float  NULL,
    [DepositeDate] datetime  NULL,
    [DepositeTo] nvarchar(50)  NULL,
    [BankName] nvarchar(50)  NULL,
    [Note] nvarchar(150)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'CustomerPayments'
CREATE TABLE [dbo].[CustomerPayments] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Customer_ID] int  NOT NULL,
    [PaymentType] nvarchar(50)  NULL,
    [ChequeNumber] nvarchar(50)  NULL,
    [PaymentDate] datetime  NULL,
    [TotalAmount] float  NULL,
    [PaidAmount] float  NULL,
    [BalanceAmount] float  NULL,
    [DepositeDate] datetime  NULL,
    [DepositeTo] nvarchar(50)  NULL,
    [BankName] nvarchar(150)  NULL,
    [Note] nvarchar(250)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'SalesInvoices'
CREATE TABLE [dbo].[SalesInvoices] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Customer_ID] int  NULL,
    [CustomerName] nvarchar(50)  NULL,
    [City_ID] int  NULL,
    [ContactNumber] nvarchar(20)  NULL,
    [InvoiceDate] datetime  NULL,
    [Ref] nvarchar(50)  NULL,
    [DueDate] datetime  NULL,
    [Note] nvarchar(150)  NULL,
    [TotalTaxAmount] float  NULL,
    [ShippingCost] float  NULL,
    [Amount] float  NULL,
    [RoundOff] float  NULL,
    [NetAmount] float  NULL,
    [SalesReturn] float  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'View_Customer_Payment_SalesInvoice'
CREATE TABLE [dbo].[View_Customer_Payment_SalesInvoice] (
    [Id] int  NOT NULL,
    [SalesInvoiceId] int  NOT NULL,
    [CustomerName] nvarchar(50)  NULL,
    [InvoiceDate] datetime  NULL,
    [ContactNumber] nvarchar(20)  NULL,
    [SalesReturn] float  NULL,
    [NetAmount] float  NULL,
    [RoundOff] float  NULL,
    [Amount] float  NULL,
    [ShippingCost] float  NULL,
    [TotalTaxAmount] float  NULL,
    [DueDate] datetime  NULL,
    [Ref] nvarchar(50)  NULL,
    [TransactionId] int  NOT NULL,
    [PaymentType] nvarchar(50)  NULL,
    [ChequeNumber] nvarchar(50)  NULL,
    [PaymentDate] datetime  NULL,
    [TotalAmount] float  NULL,
    [PaidAmount] float  NULL,
    [BalanceAmount] float  NULL,
    [DepositeDate] datetime  NULL,
    [BankName] nvarchar(150)  NULL,
    [DepositeTo] nvarchar(50)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'View_Country'
CREATE TABLE [dbo].[View_Country] (
    [ID] int IDENTITY(1,1) NOT NULL,
    [CountryName] nvarchar(50)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'View_New_Units'
CREATE TABLE [dbo].[View_New_Units] (
    [Id] int  NOT NULL,
    [FromQuantity] nvarchar(50)  NULL,
    [FromUnit] int  NULL,
    [Name] int  NULL,
    [ToQuantity] nvarchar(50)  NULL,
    [ToUnit] int  NULL,
    [ToUnitName] int  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'View_Unit'
CREATE TABLE [dbo].[View_Unit] (
    [ID] int IDENTITY(1,1) NOT NULL,
    [Name] int  NULL,
    [Description] nvarchar(250)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'View_Users'
CREATE TABLE [dbo].[View_Users] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [UserName] nvarchar(50)  NULL,
    [FirstName] nvarchar(50)  NULL,
    [LastName] nvarchar(50)  NULL,
    [Company_ID] int  NULL,
    [ContactNumber] nvarchar(20)  NULL,
    [Role_ID] int  NULL,
    [EmailID] nvarchar(50)  NULL,
    [BirthDay] datetime  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'SupplierPayments'
CREATE TABLE [dbo].[SupplierPayments] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Supplier_ID] int  NULL,
    [PaymentType] nvarchar(150)  NULL,
    [ChequeNumber] nvarchar(150)  NULL,
    [PaymentDate] datetime  NULL,
    [TotalAmount] float  NULL,
    [PaidAmount] float  NULL,
    [BalanceAmount] float  NULL,
    [DepositeDate] datetime  NULL,
    [DepositeTo] nvarchar(50)  NULL,
    [BankName] nvarchar(150)  NULL,
    [Note] nvarchar(250)  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'PurchaseInvoices'
CREATE TABLE [dbo].[PurchaseInvoices] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Supplier_ID] int  NULL,
    [SupplyerName] nvarchar(50)  NULL,
    [City_ID] int  NULL,
    [ContactNumber] nvarchar(20)  NULL,
    [InvoiceDate] datetime  NULL,
    [DueDate] datetime  NULL,
    [Note] nvarchar(150)  NULL,
    [PurchaseReturn] bit  NULL,
    [TotalTaxAmount] float  NULL,
    [ShippingCost] float  NULL,
    [Amount] float  NULL,
    [RoundOff] float  NULL,
    [NetAmount] float  NULL,
    [Status] bit  NULL
);
GO

-- Creating table 'View_Supplier_PurcchaseIvoice_SupplierPayment'
CREATE TABLE [dbo].[View_Supplier_PurcchaseIvoice_SupplierPayment] (
    [Id] int  NOT NULL,
    [PaymentType] nvarchar(150)  NULL,
    [ChequeNumber] nvarchar(150)  NULL,
    [PaymentDate] datetime  NULL,
    [TotalAmount] float  NULL,
    [PaidAmount] float  NULL,
    [BalanceAmount] float  NULL,
    [DepositeDate] datetime  NULL,
    [DepositeTo] nvarchar(50)  NULL,
    [BankName] nvarchar(150)  NULL,
    [Status] bit  NULL,
    [Name] nvarchar(50)  NULL,
    [PurchaseInvoiceID] int  NOT NULL,
    [InvoiceDate] datetime  NULL,
    [DueDate] datetime  NULL,
    [ContactNumber] nvarchar(20)  NULL,
    [TotalTaxAmount] float  NULL,
    [ShippingCost] float  NULL,
    [Amount] float  NULL,
    [RoundOff] float  NULL,
    [NetAmount] float  NULL,
    [TransactionId] int  NOT NULL
);
GO

-- Creating table 'ForgetPasswordRoleOfUsers'
CREATE TABLE [dbo].[ForgetPasswordRoleOfUsers] (
    [ForgetPasswords_Id] int  NOT NULL,
    [RoleOfUsers_Id] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'BankAccounts'
ALTER TABLE [dbo].[BankAccounts]
ADD CONSTRAINT [PK_BankAccounts]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Banks'
ALTER TABLE [dbo].[Banks]
ADD CONSTRAINT [PK_Banks]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'BusinessDetails'
ALTER TABLE [dbo].[BusinessDetails]
ADD CONSTRAINT [PK_BusinessDetails]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Categories'
ALTER TABLE [dbo].[Categories]
ADD CONSTRAINT [PK_Categories]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [ID] in table 'Cities'
ALTER TABLE [dbo].[Cities]
ADD CONSTRAINT [PK_Cities]
    PRIMARY KEY CLUSTERED ([ID] ASC);
GO

-- Creating primary key on [Id] in table 'Companies'
ALTER TABLE [dbo].[Companies]
ADD CONSTRAINT [PK_Companies]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ContraEntries'
ALTER TABLE [dbo].[ContraEntries]
ADD CONSTRAINT [PK_ContraEntries]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [ID] in table 'Countries'
ALTER TABLE [dbo].[Countries]
ADD CONSTRAINT [PK_Countries]
    PRIMARY KEY CLUSTERED ([ID] ASC);
GO

-- Creating primary key on [Id] in table 'Customers'
ALTER TABLE [dbo].[Customers]
ADD CONSTRAINT [PK_Customers]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Expenses'
ALTER TABLE [dbo].[Expenses]
ADD CONSTRAINT [PK_Expenses]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ForgetPasswords'
ALTER TABLE [dbo].[ForgetPasswords]
ADD CONSTRAINT [PK_ForgetPasswords]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Languages'
ALTER TABLE [dbo].[Languages]
ADD CONSTRAINT [PK_Languages]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'LogIns'
ALTER TABLE [dbo].[LogIns]
ADD CONSTRAINT [PK_LogIns]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Menus'
ALTER TABLE [dbo].[Menus]
ADD CONSTRAINT [PK_Menus]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [NewStocks_Id], [NewStocks_SupplierName], [NewStocks_Date], [NewStocks_City], [NewStocks_Note], [NewStocks_TotalQuantity], [Items_Id] in table 'NewStockItems'
ALTER TABLE [dbo].[NewStockItems]
ADD CONSTRAINT [PK_NewStockItems]
    PRIMARY KEY CLUSTERED ([NewStocks_Id], [NewStocks_SupplierName], [NewStocks_Date], [NewStocks_City], [NewStocks_Note], [NewStocks_TotalQuantity], [Items_Id] ASC);
GO

-- Creating primary key on [Id] in table 'NewStocks'
ALTER TABLE [dbo].[NewStocks]
ADD CONSTRAINT [PK_NewStocks]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Notifications'
ALTER TABLE [dbo].[Notifications]
ADD CONSTRAINT [PK_Notifications]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [ID] in table 'Organisations'
ALTER TABLE [dbo].[Organisations]
ADD CONSTRAINT [PK_Organisations]
    PRIMARY KEY CLUSTERED ([ID] ASC);
GO

-- Creating primary key on [Id] in table 'PartyPaymnets'
ALTER TABLE [dbo].[PartyPaymnets]
ADD CONSTRAINT [PK_PartyPaymnets]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Payments_Id], [Suppliers_Id] in table 'PaymentSuppliers'
ALTER TABLE [dbo].[PaymentSuppliers]
ADD CONSTRAINT [PK_PaymentSuppliers]
    PRIMARY KEY CLUSTERED ([Payments_Id], [Suppliers_Id] ASC);
GO

-- Creating primary key on [Id] in table 'QuantityAndPrices'
ALTER TABLE [dbo].[QuantityAndPrices]
ADD CONSTRAINT [PK_QuantityAndPrices]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'RoleOfUsers'
ALTER TABLE [dbo].[RoleOfUsers]
ADD CONSTRAINT [PK_RoleOfUsers]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Services'
ALTER TABLE [dbo].[Services]
ADD CONSTRAINT [PK_Services]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [ID] in table 'States'
ALTER TABLE [dbo].[States]
ADD CONSTRAINT [PK_States]
    PRIMARY KEY CLUSTERED ([ID] ASC);
GO

-- Creating primary key on [Id] in table 'StockInHands'
ALTER TABLE [dbo].[StockInHands]
ADD CONSTRAINT [PK_StockInHands]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'SubMenus'
ALTER TABLE [dbo].[SubMenus]
ADD CONSTRAINT [PK_SubMenus]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Suppliers'
ALTER TABLE [dbo].[Suppliers]
ADD CONSTRAINT [PK_Suppliers]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Taxes'
ALTER TABLE [dbo].[Taxes]
ADD CONSTRAINT [PK_Taxes]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [PK_Users]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Country_ID], [State_ID], [City_ID] in table 'Country_State_City_View'
ALTER TABLE [dbo].[Country_State_City_View]
ADD CONSTRAINT [PK_Country_State_City_View]
    PRIMARY KEY CLUSTERED ([Country_ID], [State_ID], [City_ID] ASC);
GO

-- Creating primary key on [Id] in table 'Customer_View'
ALTER TABLE [dbo].[Customer_View]
ADD CONSTRAINT [PK_Customer_View]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ServicesViews'
ALTER TABLE [dbo].[ServicesViews]
ADD CONSTRAINT [PK_ServicesViews]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Supplier_View'
ALTER TABLE [dbo].[Supplier_View]
ADD CONSTRAINT [PK_Supplier_View]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'View_Categories'
ALTER TABLE [dbo].[View_Categories]
ADD CONSTRAINT [PK_View_Categories]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'View_Companies'
ALTER TABLE [dbo].[View_Companies]
ADD CONSTRAINT [PK_View_Companies]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'View_Role'
ALTER TABLE [dbo].[View_Role]
ADD CONSTRAINT [PK_View_Role]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'View_Users_Role'
ALTER TABLE [dbo].[View_Users_Role]
ADD CONSTRAINT [PK_View_Users_Role]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [ID] in table 'Units'
ALTER TABLE [dbo].[Units]
ADD CONSTRAINT [PK_Units]
    PRIMARY KEY CLUSTERED ([ID] ASC);
GO

-- Creating primary key on [Id] in table 'Percentages'
ALTER TABLE [dbo].[Percentages]
ADD CONSTRAINT [PK_Percentages]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'NewUnits'
ALTER TABLE [dbo].[NewUnits]
ADD CONSTRAINT [PK_NewUnits]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Items'
ALTER TABLE [dbo].[Items]
ADD CONSTRAINT [PK_Items]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'View_Item'
ALTER TABLE [dbo].[View_Item]
ADD CONSTRAINT [PK_View_Item]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Payments'
ALTER TABLE [dbo].[Payments]
ADD CONSTRAINT [PK_Payments]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'CustomerPayments'
ALTER TABLE [dbo].[CustomerPayments]
ADD CONSTRAINT [PK_CustomerPayments]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'SalesInvoices'
ALTER TABLE [dbo].[SalesInvoices]
ADD CONSTRAINT [PK_SalesInvoices]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id], [SalesInvoiceId], [TransactionId] in table 'View_Customer_Payment_SalesInvoice'
ALTER TABLE [dbo].[View_Customer_Payment_SalesInvoice]
ADD CONSTRAINT [PK_View_Customer_Payment_SalesInvoice]
    PRIMARY KEY CLUSTERED ([Id], [SalesInvoiceId], [TransactionId] ASC);
GO

-- Creating primary key on [ID] in table 'View_Country'
ALTER TABLE [dbo].[View_Country]
ADD CONSTRAINT [PK_View_Country]
    PRIMARY KEY CLUSTERED ([ID] ASC);
GO

-- Creating primary key on [Id] in table 'View_New_Units'
ALTER TABLE [dbo].[View_New_Units]
ADD CONSTRAINT [PK_View_New_Units]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [ID] in table 'View_Unit'
ALTER TABLE [dbo].[View_Unit]
ADD CONSTRAINT [PK_View_Unit]
    PRIMARY KEY CLUSTERED ([ID] ASC);
GO

-- Creating primary key on [Id] in table 'View_Users'
ALTER TABLE [dbo].[View_Users]
ADD CONSTRAINT [PK_View_Users]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'SupplierPayments'
ALTER TABLE [dbo].[SupplierPayments]
ADD CONSTRAINT [PK_SupplierPayments]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PurchaseInvoices'
ALTER TABLE [dbo].[PurchaseInvoices]
ADD CONSTRAINT [PK_PurchaseInvoices]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id], [PurchaseInvoiceID], [TransactionId] in table 'View_Supplier_PurcchaseIvoice_SupplierPayment'
ALTER TABLE [dbo].[View_Supplier_PurcchaseIvoice_SupplierPayment]
ADD CONSTRAINT [PK_View_Supplier_PurcchaseIvoice_SupplierPayment]
    PRIMARY KEY CLUSTERED ([Id], [PurchaseInvoiceID], [TransactionId] ASC);
GO

-- Creating primary key on [ForgetPasswords_Id], [RoleOfUsers_Id] in table 'ForgetPasswordRoleOfUsers'
ALTER TABLE [dbo].[ForgetPasswordRoleOfUsers]
ADD CONSTRAINT [PK_ForgetPasswordRoleOfUsers]
    PRIMARY KEY CLUSTERED ([ForgetPasswords_Id], [RoleOfUsers_Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [Category_ID] in table 'Services'
ALTER TABLE [dbo].[Services]
ADD CONSTRAINT [FK_Services_Category]
    FOREIGN KEY ([Category_ID])
    REFERENCES [dbo].[Categories]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Services_Category'
CREATE INDEX [IX_FK_Services_Category]
ON [dbo].[Services]
    ([Category_ID]);
GO

-- Creating foreign key on [City_ID] in table 'Companies'
ALTER TABLE [dbo].[Companies]
ADD CONSTRAINT [FK_Companies_City]
    FOREIGN KEY ([City_ID])
    REFERENCES [dbo].[Cities]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Companies_City'
CREATE INDEX [IX_FK_Companies_City]
ON [dbo].[Companies]
    ([City_ID]);
GO

-- Creating foreign key on [City_ID] in table 'Customers'
ALTER TABLE [dbo].[Customers]
ADD CONSTRAINT [FK_Customers_City]
    FOREIGN KEY ([City_ID])
    REFERENCES [dbo].[Cities]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Customers_City'
CREATE INDEX [IX_FK_Customers_City]
ON [dbo].[Customers]
    ([City_ID]);
GO

-- Creating foreign key on [City_ID] in table 'NewStocks'
ALTER TABLE [dbo].[NewStocks]
ADD CONSTRAINT [FK_NewStocks_City]
    FOREIGN KEY ([City_ID])
    REFERENCES [dbo].[Cities]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_NewStocks_City'
CREATE INDEX [IX_FK_NewStocks_City]
ON [dbo].[NewStocks]
    ([City_ID]);
GO

-- Creating foreign key on [City_ID] in table 'PartyPaymnets'
ALTER TABLE [dbo].[PartyPaymnets]
ADD CONSTRAINT [FK_PartyPaymnets_City]
    FOREIGN KEY ([City_ID])
    REFERENCES [dbo].[Cities]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PartyPaymnets_City'
CREATE INDEX [IX_FK_PartyPaymnets_City]
ON [dbo].[PartyPaymnets]
    ([City_ID]);
GO

-- Creating foreign key on [State_ID] in table 'Cities'
ALTER TABLE [dbo].[Cities]
ADD CONSTRAINT [FK_State_City]
    FOREIGN KEY ([State_ID])
    REFERENCES [dbo].[States]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_State_City'
CREATE INDEX [IX_FK_State_City]
ON [dbo].[Cities]
    ([State_ID]);
GO

-- Creating foreign key on [Country_ID] in table 'Companies'
ALTER TABLE [dbo].[Companies]
ADD CONSTRAINT [FK_Companies_Country]
    FOREIGN KEY ([Country_ID])
    REFERENCES [dbo].[Countries]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Companies_Country'
CREATE INDEX [IX_FK_Companies_Country]
ON [dbo].[Companies]
    ([Country_ID]);
GO

-- Creating foreign key on [State_ID] in table 'Companies'
ALTER TABLE [dbo].[Companies]
ADD CONSTRAINT [FK_Companies_State]
    FOREIGN KEY ([State_ID])
    REFERENCES [dbo].[States]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Companies_State'
CREATE INDEX [IX_FK_Companies_State]
ON [dbo].[Companies]
    ([State_ID]);
GO

-- Creating foreign key on [Country_ID] in table 'States'
ALTER TABLE [dbo].[States]
ADD CONSTRAINT [FK_Country_State]
    FOREIGN KEY ([Country_ID])
    REFERENCES [dbo].[Countries]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Country_State'
CREATE INDEX [IX_FK_Country_State]
ON [dbo].[States]
    ([Country_ID]);
GO

-- Creating foreign key on [Menu_Id] in table 'SubMenus'
ALTER TABLE [dbo].[SubMenus]
ADD CONSTRAINT [FK_SubMenuMenu]
    FOREIGN KEY ([Menu_Id])
    REFERENCES [dbo].[Menus]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SubMenuMenu'
CREATE INDEX [IX_FK_SubMenuMenu]
ON [dbo].[SubMenus]
    ([Menu_Id]);
GO

-- Creating foreign key on [Role_ID] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [FK_Users_Roles]
    FOREIGN KEY ([Role_ID])
    REFERENCES [dbo].[RoleOfUsers]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Users_Roles'
CREATE INDEX [IX_FK_Users_Roles]
ON [dbo].[Users]
    ([Role_ID]);
GO

-- Creating foreign key on [Bank1_Id] in table 'BankAccounts'
ALTER TABLE [dbo].[BankAccounts]
ADD CONSTRAINT [FK_BankBankAccount]
    FOREIGN KEY ([Bank1_Id])
    REFERENCES [dbo].[Banks]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_BankBankAccount'
CREATE INDEX [IX_FK_BankBankAccount]
ON [dbo].[BankAccounts]
    ([Bank1_Id]);
GO

-- Creating foreign key on [ForgetPasswords_Id] in table 'ForgetPasswordRoleOfUsers'
ALTER TABLE [dbo].[ForgetPasswordRoleOfUsers]
ADD CONSTRAINT [FK_ForgetPasswordRoleOfUsers_ForgetPasswords]
    FOREIGN KEY ([ForgetPasswords_Id])
    REFERENCES [dbo].[ForgetPasswords]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [RoleOfUsers_Id] in table 'ForgetPasswordRoleOfUsers'
ALTER TABLE [dbo].[ForgetPasswordRoleOfUsers]
ADD CONSTRAINT [FK_ForgetPasswordRoleOfUsers_RoleOfUsers]
    FOREIGN KEY ([RoleOfUsers_Id])
    REFERENCES [dbo].[RoleOfUsers]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ForgetPasswordRoleOfUsers_RoleOfUsers'
CREATE INDEX [IX_FK_ForgetPasswordRoleOfUsers_RoleOfUsers]
ON [dbo].[ForgetPasswordRoleOfUsers]
    ([RoleOfUsers_Id]);
GO

-- Creating foreign key on [Unit_Id] in table 'QuantityAndPrices'
ALTER TABLE [dbo].[QuantityAndPrices]
ADD CONSTRAINT [FK_QuantityAndPrice_Unit]
    FOREIGN KEY ([Unit_Id])
    REFERENCES [dbo].[Units]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_QuantityAndPrice_Unit'
CREATE INDEX [IX_FK_QuantityAndPrice_Unit]
ON [dbo].[QuantityAndPrices]
    ([Unit_Id]);
GO

-- Creating foreign key on [FromUnit] in table 'NewUnits'
ALTER TABLE [dbo].[NewUnits]
ADD CONSTRAINT [FK_NewUnits_FromUnits]
    FOREIGN KEY ([FromUnit])
    REFERENCES [dbo].[Units]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_NewUnits_FromUnits'
CREATE INDEX [IX_FK_NewUnits_FromUnits]
ON [dbo].[NewUnits]
    ([FromUnit]);
GO

-- Creating foreign key on [ToUnit] in table 'NewUnits'
ALTER TABLE [dbo].[NewUnits]
ADD CONSTRAINT [FK_NewUnits_ToUnits]
    FOREIGN KEY ([ToUnit])
    REFERENCES [dbo].[Units]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_NewUnits_ToUnits'
CREATE INDEX [IX_FK_NewUnits_ToUnits]
ON [dbo].[NewUnits]
    ([ToUnit]);
GO

-- Creating foreign key on [Category_ID] in table 'Items'
ALTER TABLE [dbo].[Items]
ADD CONSTRAINT [FK_Items_Category]
    FOREIGN KEY ([Category_ID])
    REFERENCES [dbo].[Categories]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Items_Category'
CREATE INDEX [IX_FK_Items_Category]
ON [dbo].[Items]
    ([Category_ID]);
GO

-- Creating foreign key on [Items_Id] in table 'NewStockItems'
ALTER TABLE [dbo].[NewStockItems]
ADD CONSTRAINT [FK_NewStockItem_Item]
    FOREIGN KEY ([Items_Id])
    REFERENCES [dbo].[Items]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_NewStockItem_Item'
CREATE INDEX [IX_FK_NewStockItem_Item]
ON [dbo].[NewStockItems]
    ([Items_Id]);
GO

-- Creating foreign key on [Item_Id] in table 'QuantityAndPrices'
ALTER TABLE [dbo].[QuantityAndPrices]
ADD CONSTRAINT [FK_QuantityAndPrice_Item]
    FOREIGN KEY ([Item_Id])
    REFERENCES [dbo].[Items]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_QuantityAndPrice_Item'
CREATE INDEX [IX_FK_QuantityAndPrice_Item]
ON [dbo].[QuantityAndPrices]
    ([Item_Id]);
GO

-- Creating foreign key on [Payments_Id] in table 'PaymentSuppliers'
ALTER TABLE [dbo].[PaymentSuppliers]
ADD CONSTRAINT [FK_PaymentSupplier_Payment]
    FOREIGN KEY ([Payments_Id])
    REFERENCES [dbo].[Payments]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [City_ID] in table 'SalesInvoices'
ALTER TABLE [dbo].[SalesInvoices]
ADD CONSTRAINT [FK_SalesInvoices_City]
    FOREIGN KEY ([City_ID])
    REFERENCES [dbo].[Cities]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SalesInvoices_City'
CREATE INDEX [IX_FK_SalesInvoices_City]
ON [dbo].[SalesInvoices]
    ([City_ID]);
GO

-- Creating foreign key on [Customer_ID] in table 'CustomerPayments'
ALTER TABLE [dbo].[CustomerPayments]
ADD CONSTRAINT [FK_CustomerPayments_Customer]
    FOREIGN KEY ([Customer_ID])
    REFERENCES [dbo].[Customers]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CustomerPayments_Customer'
CREATE INDEX [IX_FK_CustomerPayments_Customer]
ON [dbo].[CustomerPayments]
    ([Customer_ID]);
GO

-- Creating foreign key on [Customer_ID] in table 'SalesInvoices'
ALTER TABLE [dbo].[SalesInvoices]
ADD CONSTRAINT [FK_SalesInvoices_Customer]
    FOREIGN KEY ([Customer_ID])
    REFERENCES [dbo].[Customers]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SalesInvoices_Customer'
CREATE INDEX [IX_FK_SalesInvoices_Customer]
ON [dbo].[SalesInvoices]
    ([Customer_ID]);
GO

-- Creating foreign key on [Supplier_ID] in table 'SupplierPayments'
ALTER TABLE [dbo].[SupplierPayments]
ADD CONSTRAINT [FK_SupplierSupplyerPayment]
    FOREIGN KEY ([Supplier_ID])
    REFERENCES [dbo].[Suppliers]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SupplierSupplyerPayment'
CREATE INDEX [IX_FK_SupplierSupplyerPayment]
ON [dbo].[SupplierPayments]
    ([Supplier_ID]);
GO

-- Creating foreign key on [City_ID] in table 'PurchaseInvoices'
ALTER TABLE [dbo].[PurchaseInvoices]
ADD CONSTRAINT [FK_PurchaseInvoices_City]
    FOREIGN KEY ([City_ID])
    REFERENCES [dbo].[Cities]
        ([ID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PurchaseInvoices_City'
CREATE INDEX [IX_FK_PurchaseInvoices_City]
ON [dbo].[PurchaseInvoices]
    ([City_ID]);
GO

-- Creating foreign key on [Supplier_ID] in table 'PurchaseInvoices'
ALTER TABLE [dbo].[PurchaseInvoices]
ADD CONSTRAINT [FK_PurchaseInvoices_Supplier]
    FOREIGN KEY ([Supplier_ID])
    REFERENCES [dbo].[Suppliers]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PurchaseInvoices_Supplier'
CREATE INDEX [IX_FK_PurchaseInvoices_Supplier]
ON [dbo].[PurchaseInvoices]
    ([Supplier_ID]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------