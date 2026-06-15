/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder.withThemeName<ThemeName>().withCustomTranslations({
	en: {
		header: "Log In",
		subHeader: "Welcome in the bonprix Backoffice",
		email: "Email",
		password: "Password",
		doLogIn: "Log In",
	}, de: {
		header: "Anmelden",
		subHeader: "Willkommen im bonprix Backoffice",
		email: "E-Mail",
		password: "Passwort",
		doLogIn: "Anmelden",
	}
}).build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
