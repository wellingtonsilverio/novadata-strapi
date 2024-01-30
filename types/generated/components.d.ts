import type { Schema, Attribute } from '@strapi/strapi';

export interface FormAddons extends Schema.Component {
  collectionName: 'components_form_addons';
  info: {
    displayName: 'addons';
    icon: 'plus';
  };
  attributes: {
    checkboxs: Attribute.Component<'form.checkbox', true>;
  };
}

export interface FormButtonsList extends Schema.Component {
  collectionName: 'components_form_buttons_lists';
  info: {
    displayName: 'buttons-list';
    icon: 'cursor';
  };
  attributes: {
    buttons: Attribute.Component<'form.buttons', true>;
  };
}

export interface FormButtons extends Schema.Component {
  collectionName: 'components_form_buttons';
  info: {
    displayName: 'buttons';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    button: Attribute.Enumeration<['next', 'back', 'confirm']>;
  };
}

export interface FormCheckbox extends Schema.Component {
  collectionName: 'components_form_checkboxes';
  info: {
    displayName: 'checkbox';
    icon: 'check';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subheading: Attribute.String & Attribute.Required;
    priceMonthly: Attribute.String & Attribute.Required;
    priceYearly: Attribute.String & Attribute.Required;
  };
}

export interface FormFormInputs extends Schema.Component {
  collectionName: 'components_form_form_inputs';
  info: {
    displayName: 'form-inputs';
    icon: 'file';
  };
  attributes: {
    input: Attribute.Component<'form.input', true>;
  };
}

export interface FormInput extends Schema.Component {
  collectionName: 'components_form_inputs';
  info: {
    displayName: 'input';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    type: Attribute.String & Attribute.Required & Attribute.DefaultTo<'text'>;
    required: Attribute.Boolean;
    placeholder: Attribute.String;
  };
}

export interface FormMenuList extends Schema.Component {
  collectionName: 'components_form_menu_lists';
  info: {
    displayName: 'menu-list';
    icon: 'bulletList';
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'STEP {n}'>;
    heading: Attribute.String & Attribute.Required;
  };
}

export interface FormMessage extends Schema.Component {
  collectionName: 'components_form_messages';
  info: {
    displayName: 'message';
    icon: 'message';
  };
  attributes: {
    icon: Attribute.Media;
    heading: Attribute.String & Attribute.Required;
    text: Attribute.Blocks;
  };
}

export interface FormPlanCard extends Schema.Component {
  collectionName: 'components_form_plan_cards';
  info: {
    displayName: 'plan-card';
    icon: 'apps';
    description: '';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    priceMonthly: Attribute.String & Attribute.Required;
    priceYearly: Attribute.String;
    yearlyDiscount: Attribute.String & Attribute.Required;
  };
}

export interface FormPlans extends Schema.Component {
  collectionName: 'components_form_plans';
  info: {
    displayName: 'plans';
    icon: 'bulletList';
  };
  attributes: {
    plan: Attribute.Component<'form.plan-card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'form.addons': FormAddons;
      'form.buttons-list': FormButtonsList;
      'form.buttons': FormButtons;
      'form.checkbox': FormCheckbox;
      'form.form-inputs': FormFormInputs;
      'form.input': FormInput;
      'form.menu-list': FormMenuList;
      'form.message': FormMessage;
      'form.plan-card': FormPlanCard;
      'form.plans': FormPlans;
    }
  }
}
