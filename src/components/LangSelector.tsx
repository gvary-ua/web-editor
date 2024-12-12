import React, { useContext, useState } from 'react';
import { P } from './P';
import { twMerge } from 'tailwind-merge';
import { GlobalContext } from 'context/GlobalContext';

export const i18nEn = {
  Publish: 'Publish',
  Chapters: 'Chapters',
  'New chapter': 'New chapter',
  Up: 'Up',
  Down: 'Down',
  Delete: 'Delete',
  Title: 'Title',
  'Chapter title': 'Chapter title',
  EditorJs: {
    messages: {
      ui: {
        blockTunes: {
          toggler: {
            'Click to tune': 'Click to tune',
            'or drag to move': 'or drag to move',
          },
        },
        inlineToolbar: {
          converter: {
            'Convert to': 'Convert to',
          },
        },
        toolbar: {
          toolbox: {
            Add: 'Add',
          },
        },
        popover: {
          Filter: 'Search',
          'Nothing found': 'Nothing found',
        },
      },
      toolNames: {
        Text: 'Paragraph',
        Heading: 'Heading',
        List: 'List',
        Checklist: 'Checklist',
        Delimiter: 'Delimiter',
        Bold: 'Bold',
        Italic: 'Italic',
        Link: 'Link',
        Strikethrough: 'Strikethrough',
        Underline: 'Underline',
      },
      tools: {
        header: {
          'Enter a header': 'Enter a header',
          'Heading 1': 'Heading 1',
          'Heading 2': 'Heading 2',
          'Heading 3': 'Heading 3',
        },
        paragraph: {
          'Enter a text': 'Enter a text',
        },
        list: {
          Unordered: 'Unordered',
          Ordered: 'Ordered',
        },
      },
      blockTunes: {
        delete: {
          Delete: 'Delete',
        },
        moveUp: {
          'Move up': 'Move up',
        },
        moveDown: {
          'Move down': 'Move down',
        },
      },
    },
  },
};
export const i18nUk = {
  Publish: 'Опублікувати',
  Chapters: 'Розділи',
  'New chapter': 'Нова глава',
  Up: 'Вгору',
  Down: 'Вниз',
  Delete: 'Видалити',
  Title: 'Назва',
  'Chapter title': 'Назва глави',
  EditorJs: {
    messages: {
      ui: {
        blockTunes: {
          toggler: {
            'Click to tune': 'Натисніть, щоб налаштувати',
            'or drag to move': 'або перетягніть',
          },
        },
        inlineToolbar: {
          converter: {
            'Convert to': 'Конвертувати в',
          },
        },
        toolbar: {
          toolbox: {
            Add: 'Додати',
          },
        },
        popover: {
          Filter: 'Пошук',
          'Nothing found': 'Нічого не знайдено',
        },
      },
      toolNames: {
        Text: 'Параграф',
        Heading: 'Заголовок',
        List: 'Список',
        Checklist: 'Чеклист',
        Delimiter: 'Роздільник',
        Bold: 'Жирний',
        Italic: 'Курсив',
        Link: 'Посилання',
        Strikethrough: 'Закреслений',
        Underline: 'Підкреслений',
      },
      tools: {
        header: {
          'Enter a header': 'Введіть заголовок',
          'Heading 1': 'Заголовок 1',
          'Heading 2': 'Заголовок 2',
          'Heading 3': 'Заголовок 3',
        },
        paragraph: {
          'Enter a text': 'Введіть текст',
        },
        list: {
          Unordered: 'Невпорядкований',
          Ordered: 'Упорядкований',
        },
      },
      blockTunes: {
        delete: {
          Delete: 'Видалити',
        },
        moveUp: {
          'Move up': 'Вгору',
        },
        moveDown: {
          'Move down': 'Вниз',
        },
      },
    },
  },
};

export default function LangSelector({ className, ...props }: { className?: string }) {
  const [currentLocale, setCurrentLocale] = useState('en');
  const { setI18n } = useContext(GlobalContext);

  return (
    <div className={twMerge('items-center justify-center space-x-2', className)}>
      <P
        className={
          currentLocale === 'en'
            ? 'cursor-not-allowed text-on-background-2'
            : 'cursor-pointer underline'
        }
        onClick={() => {
          setCurrentLocale('en');
          setI18n(i18nEn);
        }}
      >
        EN
      </P>
      <P
        className={
          currentLocale === 'uk'
            ? 'cursor-not-allowed text-on-background-2'
            : 'cursor-pointer underline'
        }
        onClick={() => {
          setCurrentLocale('uk');
          setI18n(i18nUk);
        }}
      >
        UK
      </P>
    </div>
  );
}
