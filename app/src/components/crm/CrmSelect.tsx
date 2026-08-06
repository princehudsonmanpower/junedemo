"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown } from "lucide-react";

export type CrmSelectOption = {
    value: string;
    label: string;
    description?: string;
};

type CrmSelectProps = {
    name: string;
    options: CrmSelectOption[];
    defaultValue?: string;
    required?: boolean;
    placeholder?: string;
};

type MenuPosition = {
    top: number;
    left: number;
    width: number;
    maxHeight: number;
};

function computeMenuPosition(trigger: HTMLElement): MenuPosition {
    const rect = trigger.getBoundingClientRect();
    const gap = 6;
    const viewportPadding = 12;
    const preferredMaxHeight = 240;

    const spaceBelow = window.innerHeight - rect.bottom - viewportPadding;
    const spaceAbove = rect.top - viewportPadding;

    if (spaceBelow >= 100 || spaceBelow >= spaceAbove) {
        return {
            top: rect.bottom + gap,
            left: rect.left,
            width: rect.width,
            maxHeight: Math.min(preferredMaxHeight, Math.max(spaceBelow - gap, 80)),
        };
    }

    const maxHeight = Math.min(preferredMaxHeight, Math.max(spaceAbove - gap, 80));
    return {
        top: rect.top - gap - maxHeight,
        left: rect.left,
        width: rect.width,
        maxHeight,
    };
}

export default function CrmSelect({
    name,
    options,
    defaultValue,
    required,
    placeholder = "Select an option",
}: CrmSelectProps) {
    const listboxId = useId();
    const rootRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLUListElement>(null);
    const initial = defaultValue ?? options[0]?.value ?? "";
    const [value, setValue] = useState(initial);
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [menuPos, setMenuPos] = useState<MenuPosition | null>(null);

    const selected = options.find((o) => o.value === value);

    const close = useCallback(() => setOpen(false), []);

    const updatePosition = useCallback(() => {
        if (!triggerRef.current) return;
        setMenuPos(computeMenuPosition(triggerRef.current));
    }, []);

    useEffect(() => setMounted(true), []);

    useLayoutEffect(() => {
        if (!open) {
            setMenuPos(null);
            return;
        }
        updatePosition();
        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition, true);
        return () => {
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", updatePosition, true);
        };
    }, [open, updatePosition]);

    useEffect(() => {
        if (!open) return;

        function onPointerDown(e: MouseEvent) {
            const target = e.target as Node;
            if (rootRef.current?.contains(target) || menuRef.current?.contains(target)) return;
            close();
        }

        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") close();
        }

        document.addEventListener("mousedown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("mousedown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [open, close]);

    function pick(next: string) {
        setValue(next);
        close();
    }

    const menu =
        mounted && open && menuPos
            ? createPortal(
                  <ul
                      ref={menuRef}
                      id={listboxId}
                      className="crm-select__menu crm-select__menu--portal"
                      role="listbox"
                      style={{
                          top: menuPos.top,
                          left: menuPos.left,
                          width: menuPos.width,
                          maxHeight: menuPos.maxHeight,
                      }}
                  >
                      {options.map((option) => {
                          const isSelected = option.value === value;
                          return (
                              <li key={option.value} role="presentation">
                                  <button
                                      type="button"
                                      role="option"
                                      aria-selected={isSelected}
                                      className={`crm-select__option${isSelected ? " is-selected" : ""}`}
                                      onClick={() => pick(option.value)}
                                  >
                                      <span className="crm-select__option-text">
                                          <span className="crm-select__option-label">{option.label}</span>
                                          {option.description && (
                                              <span className="crm-select__option-desc">{option.description}</span>
                                          )}
                                      </span>
                                      {isSelected && (
                                          <Check size={16} className="crm-select__check" aria-hidden />
                                      )}
                                  </button>
                              </li>
                          );
                      })}
                  </ul>,
                  document.body,
              )
            : null;

    return (
        <div ref={rootRef} className={`crm-select${open ? " is-open" : ""}`}>
            <input type="hidden" name={name} value={value} required={required} />

            <button
                ref={triggerRef}
                type="button"
                className="crm-select__trigger"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={listboxId}
                onClick={() => setOpen((o) => !o)}
            >
                <span className="crm-select__value">
                    {selected ? (
                        <span className="crm-select__value-label">{selected.label}</span>
                    ) : (
                        <span className="crm-select__placeholder">{placeholder}</span>
                    )}
                </span>
                <ChevronDown size={16} className="crm-select__chevron" aria-hidden />
            </button>

            {menu}
        </div>
    );
}
