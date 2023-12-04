



CREATE TABLE "Спрос"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Цена" NUMBER(10) NULL,

	"КатегорНомера" NUMBER(10) NULL,

	"ЗанятВМесяц" NUMBER(10) NULL,

	"Юридич" NUMBER(1) NULL,

	"БроньЧерСайт" NUMBER(1) NULL,

	"СкПриДлитПрожив" NUMBER(1) NULL,

	"СкДР" NUMBER(1) NULL,

	"СкВторНомер" NUMBER(1) NULL,

	"СуммСоСкид" NUMBER(10) NULL,

	"Маркетолог" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Персонал"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Телефон" NUMBER(10) NULL,

	"Должность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Маркетолог"
(

	"primaryKey" RAW(16) NOT NULL,

	"Персонал" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОсновПоказат"
(

	"primaryKey" RAW(16) NOT NULL,

	"ВыручкаОбщ" NUMBER(10) NULL,

	"Заполняемость" NUMBER(10) NULL,

	"СрЦена" NUMBER(10) NULL,

	"ВыручЗаОдинН" NUMBER(10) NULL,

	"ВыручЗаГостя" NUMBER(10) NULL,

	"СрКолвоГостВНо" NUMBER(10) NULL,

	"Маркетолог" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должность"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодДолжности" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЦелеваяАудит"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"ДатаРожд" NVARCHAR2(255) NULL,

	"Пол" NVARCHAR2(255) NULL,

	"Возраст" NUMBER(10) NULL,

	"Национальн" NVARCHAR2(255) NULL,

	"СемейнПол" NVARCHAR2(255) NULL,

	"Образование" NVARCHAR2(255) NULL,

	"Маркетолог" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Спрос"
	ADD CONSTRAINT "Спрос_FМаркет_1910" FOREIGN KEY ("Маркетолог") REFERENCES "Маркетолог" ("primaryKey");

CREATE INDEX "Спрос_IМаркет_1458" on "Спрос" ("Маркетолог");

ALTER TABLE "Персонал"
	ADD CONSTRAINT "Персонал_FДол_2660" FOREIGN KEY ("Должность") REFERENCES "Должность" ("primaryKey");

CREATE INDEX "Персонал_IДол_1979" on "Персонал" ("Должность");

ALTER TABLE "Маркетолог"
	ADD CONSTRAINT "Маркетолог_FП_1764" FOREIGN KEY ("Персонал") REFERENCES "Персонал" ("primaryKey");

CREATE INDEX "Маркетолог_IП_3649" on "Маркетолог" ("Персонал");

ALTER TABLE "ОсновПоказат"
	ADD CONSTRAINT "ОсновПоказат_F_463" FOREIGN KEY ("Маркетолог") REFERENCES "Маркетолог" ("primaryKey");

CREATE INDEX "ОсновПоказат__6787" on "ОсновПоказат" ("Маркетолог");

ALTER TABLE "ЦелеваяАудит"
	ADD CONSTRAINT "ЦелеваяАудит__4350" FOREIGN KEY ("Маркетолог") REFERENCES "Маркетолог" ("primaryKey");

CREATE INDEX "ЦелеваяАудит__5923" on "ЦелеваяАудит" ("Маркетолог");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


